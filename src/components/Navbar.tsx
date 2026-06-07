"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-background border-b border-border shadow-soft"
            : "border-b border-transparent",
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between gap-4">
            <Logo />

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-green-soft hover:text-green"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <ThemeToggle />
              <Button href="#get-started" size="sm">
                Download app
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-border transition hover:bg-surface cursor-pointer"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {open ? (
        <div className="bg-background border-b border-border lg:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition hover:bg-green-soft hover:text-green"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Button
                href="#get-started"
                size="md"
                onClick={() => setOpen(false)}
              >
                Download app
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
