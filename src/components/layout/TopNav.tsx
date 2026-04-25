"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, BookmarkSimple } from "./icons";
import { cn } from "@/lib/utils/cn";

interface TopNavProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  className?: string;
}

export function TopNav({
  title,
  showBack = false,
  backHref,
  className,
}: TopNavProps) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between px-4 h-14",
        "border-b",
        className
      )}
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      {/* Left: back button or logo */}
      <div className="flex items-center gap-2 min-w-[40px]">
        {showBack ? (
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="The Criterion — Home"
          >
            {/* Wordmark: "criterion." — CursorGothic 600 lowercase, design.md §12.2 */}
            <span
              className="font-semibold"
              style={{
                color: "var(--ink-primary)",
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                letterSpacing: "-0.088px",
              }}
            >
              criterion<span style={{ color: "var(--ink-primary)" }}>.</span>
            </span>
          </Link>
        )}
      </div>

      {/* Center: wordmark or title — CursorGothic per design.md §12.2 */}
      {title && (
        <h1
          className="text-sm font-medium truncate max-w-[50%] text-center"
          style={{ color: "var(--ink-primary)", fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
      )}

      {/* Right: actions */}
      <div className="flex items-center gap-1 min-w-[40px] justify-end">
        <Link
          href="/search"
          className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Search"
        >
          <Search size={18} />
        </Link>
        <Link
          href="/saved"
          className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Saved"
        >
          <BookmarkSimple size={18} />
        </Link>
      </div>
    </header>
  );
}
