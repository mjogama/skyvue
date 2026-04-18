import type { ReactNode } from "react";

export function SectionNote({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p
      id={id}
      className="-mt-1.5 mb-3.5 max-w-[62ch] pl-3 text-xs leading-relaxed text-slate-400 dark:text-slate-500"
    >
      {children}
    </p>
  );
}
