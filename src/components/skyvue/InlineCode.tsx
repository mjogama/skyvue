import type { ReactNode } from "react";

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-slate-200/90 px-[0.35em] py-[0.12em] font-mono text-[0.88em] text-slate-600 dark:bg-[#1e2433] dark:text-slate-300">
      {children}
    </code>
  );
}
