"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, MessageSquare, Hash, Headphones } from "./icons";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    matchExact: true,
  },
  {
    label: "Read",
    href: "/read",
    icon: BookOpen,
    matchExact: false,
  },
  {
    label: "Ask",
    href: "/ask",
    icon: MessageSquare,
    matchExact: false,
  },
  {
    label: "Themes",
    href: "/themes",
    icon: Hash,
    matchExact: false,
  },
  {
    label: "Listen",
    href: "/listen",
    icon: Headphones,
    matchExact: false,
  },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t safe-area-pb"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
      aria-label="Primary navigation"
    >
      <div className="flex items-stretch max-w-lg mx-auto">
        {NAV_ITEMS.map(({ label, href, icon: Icon, matchExact }) => {
          const isActive = matchExact
            ? pathname === href
            : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 min-h-[56px]",
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
              )}
              style={{
                color: isActive ? "var(--brand-primary)" : "var(--ink-muted)",
                fontFamily: "var(--font-display)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                size={20}
                weight={isActive ? "bold" : "regular"}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
