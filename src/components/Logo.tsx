// components/Logo.tsx
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  name?: string;
}

export function Logo({ className, name = "Parallel Stays PG" }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 select-none",
        className
      )}
    >
      <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-full h-full"
        >
          <rect width="32" height="32" rx="8" fill="currentColor" />
          <path
            d="M6 12L16 6L26 12V24C26 24.5523 25.5523 25 25 25H7C6.44772 25 6 24.5523 6 24V12Z"
            fill="white"
          />
          <rect x="13" y="17" width="6" height="8" rx="1" fill="currentColor" />
          <circle cx="16" cy="13.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}
