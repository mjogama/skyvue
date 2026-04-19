import { InlineCode } from "./InlineCode";
import type { IPageFooter } from "@/interfaces/IPageFooter";

export function PageFooter({ data }: { data: IPageFooter | null }) {
  if (!data) return null;

  const {
    last_updated,
    condition: { code },
  } = data.current;

  return (
    <footer
      id="page-footer"
      className="mt-8 w-screen border-t border-slate-900/8 bg-white shadow-[0_-4px_24px_rgba(15,23,42,0.04)] ml-[calc(50%-50vw)] dark:border-white/8 dark:bg-[#141824] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
      <div className="footer-inner mx-auto flex max-w-[min(1600px,100%)] flex-wrap items-center justify-between gap-3 px-[clamp(16px,4vw,40px)] py-[clamp(18px,2.5vw,24px)] max-sm:flex-col max-sm:items-start">
        <span className="footer-brand text-[15px] font-bold tracking-tight text-blue-600 dark:text-blue-400">Skyvue</span>
        <span id="footer-status" className="min-w-[min(100%,280px)] flex-1 text-right text-xs text-slate-400 max-sm:text-left dark:text-slate-500">
          WeatherAPI · <InlineCode>{last_updated}</InlineCode> · Condition {code}
        </span>
      </div>
    </footer>
  );
}
