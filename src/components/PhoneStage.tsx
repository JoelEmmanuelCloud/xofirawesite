"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";
import { PhoneDemo } from "@/components/PhoneDemo";

const PhoneModel3D = dynamic(
  () => import("@/components/PhoneModel3D").then((m) => m.PhoneModel3D),
  { ssr: false, loading: () => <PhoneDemo /> },
);

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

class CanvasBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function PhoneStage({ className }: { className?: string }) {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setUse3d(hasWebGL()));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!use3d) {
    return <PhoneDemo className={className} />;
  }

  return (
    <CanvasBoundary fallback={<PhoneDemo className={className} />}>
      <PhoneModel3D className={className} />
    </CanvasBoundary>
  );
}
