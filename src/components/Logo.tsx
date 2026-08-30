// components/Logo.tsx
import { cn } from "@/lib/utils";
import { useSidebarState } from "@/components/ui/sidebar";

interface LogoProps {
  className?: string;
  collapseAware?: boolean;
  name?: string;
}

export function Logo({ className, collapseAware = false, name }: LogoProps) {
  const sidebar = useSidebarState();
  const isCollapsed = collapseAware && sidebar?.state === "collapsed";

  const displayName = name || "PG";

  return (
    <div
      className={cn(
        "flex items-center select-none",
        isCollapsed ? "justify-center w-full" : "gap-2.5",
        className
      )}
    >
      <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-full h-full"
        >
          <rect width="32" height="32" rx="8" fill="currentColor" className="text-primary" />
          <path
            d="M6 12L16 6L26 12V24C26 24.5523 25.5523 25 25 25H7C6.44772 25 6 24.5523 6 24V12Z"
            fill="white"
          />
          <rect x="13" y="17" width="6" height="8" rx="1" fill="currentColor" className="text-primary" />
          <circle cx="16" cy="13.5" r="1.5" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className={cn(
        "flex flex-col leading-none transition-all duration-200",
        isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
      )}>
        <span className="text-sm font-bold tracking-tight text-foreground whitespace-nowrap">
          {displayName}
        </span>
      </div>
    </div>
  );
}
