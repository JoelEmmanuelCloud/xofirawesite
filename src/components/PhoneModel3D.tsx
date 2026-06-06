"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Html,
  Float,
  Environment,
  Lightformer,
  ContactShadows,
  useTexture,
} from "@react-three/drei";
import type { Group, Mesh } from "three";
import { PhoneScreen } from "@/components/PhoneScreen";

const W = 2.0;
const H = 4.14;
const D = 0.22;
const R = 0.26;

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Lens({ x, y }: { x: number; y: number }) {
  return (
    <mesh position={[x, y, 0.03]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.12, 0.12, 0.06, 32]} />
      <meshStandardMaterial color="#0a0f1a" metalness={0.9} roughness={0.15} />
    </mesh>
  );
}

function Phone() {
  const spin = useRef<Group>(null);
  const body = useRef<Mesh>(null);
  const mark = useTexture("/xofira-mark.png");

  useFrame((state, delta) => {
    if (!spin.current || reducedMotion()) return;
    spin.current.rotation.y += delta * 0.45;
  });

  return (
    <group ref={spin}>
      <RoundedBox
        ref={body}
        args={[W, H, D]}
        radius={R}
        smoothness={8}
        steps={2}
      >
        <meshStandardMaterial color="#0c1627" metalness={0.85} roughness={0.38} />
      </RoundedBox>

      <RoundedBox
        args={[W - 0.14, H - 0.14, 0.02]}
        radius={R - 0.06}
        smoothness={6}
        position={[0, 0, D / 2 + 0.001]}
      >
        <meshStandardMaterial color="#05070d" metalness={0.4} roughness={0.25} />
      </RoundedBox>

      <mesh position={[0, H / 2 - 0.34, D / 2 + 0.02]}>
        <capsuleGeometry args={[0.075, 0.42, 8, 16]} />
        <meshStandardMaterial color="#04060a" />
      </mesh>

      <Html
        transform
        occlude="blending"
        position={[0, 0, D / 2 + 0.015]}
        scale={0.0066}
        zIndexRange={[8, 0]}
        pointerEvents="none"
        style={{ width: 270, height: 568, borderRadius: 38, overflow: "hidden" }}
      >
        <PhoneScreen />
      </Html>

      <group position={[-W / 2 + 0.55, H / 2 - 0.62, -(D / 2 + 0.02)]}>
        <RoundedBox args={[0.86, 0.86, 0.08]} radius={0.18} smoothness={5}>
          <meshStandardMaterial color="#0a121f" metalness={0.6} roughness={0.4} />
        </RoundedBox>
        <Lens x={-0.18} y={0.18} />
        <Lens x={0.18} y={0.18} />
        <Lens x={-0.18} y={-0.18} />
        <mesh position={[0.18, -0.18, 0.03]}>
          <cylinderGeometry args={[0.05, 0.05, 0.06, 16]} />
          <meshStandardMaterial
            color="#fff4d6"
            emissive="#fff0c0"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      <mesh position={[0, -0.1, -(D / 2 + 0.011)]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.15, 1.15]} />
        <meshBasicMaterial map={mark} transparent opacity={0.95} />
      </mesh>
    </group>
  );
}

export function PhoneModel3D({ className }: { className?: string }) {
  return (
    <div className={className} style={{ height: 600 }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.1, 7.4], fov: 32 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 8, 6]} intensity={1.3} />
        <directionalLight position={[-6, 2, -3]} intensity={0.5} color="#bcd4ff" />

        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.7}>
            <Phone />
          </Float>

          <Environment resolution={256} frames={1}>
            <Lightformer intensity={2.4} position={[0, 3, 4]} scale={[7, 7, 1]} />
            <Lightformer
              intensity={1.1}
              position={[-4, 1, 2]}
              scale={[4, 4, 1]}
              color="#cfe0ff"
            />
            <Lightformer
              intensity={1.1}
              position={[4, -1, 2]}
              scale={[4, 4, 1]}
              color="#d7ffe6"
            />
          </Environment>
        </Suspense>

        <ContactShadows
          position={[0, -2.6, 0]}
          opacity={0.35}
          scale={9}
          blur={2.6}
          far={4}
        />
      </Canvas>
    </div>
  );
}
