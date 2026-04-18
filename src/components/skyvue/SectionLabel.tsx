import type { ReactNode } from "react";
import { cn } from "./cn";

export function SectionLabel({ id, children, classNameOverride }: { id: string; children: ReactNode; classNameOverride?: string }) {
  return (
    <div
      id={id}
      className={cn(
        "mb-3 mt-6 flex min-h-[1.2em] items-center border-l-[3px] border-blue-600 pl-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 first:mt-0 dark:border-blue-400 dark:text-slate-500",
        classNameOverride,
      )}>
      {children}
    </div>
  );
}
