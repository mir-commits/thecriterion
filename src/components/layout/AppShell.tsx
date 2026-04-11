/**
 * AppShell — root layout wrapper for all authenticated surfaces.
 *
 * Mobile-first: full-height, bottom navigation on small screens,
 * side navigation on larger screens.
 */
import type { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";

interface AppShellProps {
  children: ReactNode;
  /** Override the default top nav title */
  title?: string;
  /** Show a back button in the top nav */
  showBack?: boolean;
  /** Custom back href (defaults to browser back) */
  backHref?: string;
  /** Hide top nav entirely (e.g., home page) */
  hideTopNav?: boolean;
}

export function AppShell({
  children,
  title,
  showBack = false,
  backHref,
  hideTopNav = false,
}: AppShellProps) {
  return (
    <div className="min-h-dvh flex flex-col" style={{ backgroundColor: "var(--background)" }}>
      {!hideTopNav && (
        <TopNav title={title} showBack={showBack} backHref={backHref} />
      )}

      {/* Main content — scrollable, with bottom padding for nav */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-6">
        {children}
      </main>

      {/* Bottom navigation — visible on all screens */}
      <BottomNav />
    </div>
  );
}
