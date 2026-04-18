import { cn } from "./cn";

export function HourSlot({
  idPrefix,
  time,
  temp,
  placeholder,
  defaultChecked,
  iconUrl,
}: {
  idPrefix: number;
  time: string;
  temp: string;
  placeholder?: boolean;
  defaultChecked?: boolean;
  iconUrl?: string;
}) {
  return (
    <label
      id={`hour-slot-${idPrefix}`}
      role="listitem"
      className={cn(
        "group relative block min-w-16 shrink-0 cursor-pointer rounded-[10px] px-2.5 py-3 text-center transition-colors hover:bg-[#eef1f6] has-[input:checked]:bg-blue-600 has-[input:checked]:shadow-[0_4px_14px_rgba(37,99,235,0.12)] dark:hover:bg-[#1e2433] dark:has-[input:checked]:bg-blue-500 dark:has-[input:checked]:shadow-[0_4px_14px_rgba(96,165,250,0.15)]",
        placeholder && "opacity-55",
      )}
    >
      <input
        type="radio"
        name="hour"
        id={`hour-radio-${idPrefix}`}
        className="sr-only"
        defaultChecked={defaultChecked}
      />
      <div
        id={`hour-time-${idPrefix}`}
        className="text-[11px] font-semibold text-slate-400 group-has-[input:checked]:text-white dark:text-slate-500 dark:group-has-[input:checked]:text-white"
      >
        {time}
      </div>
      <div
        id={`hour-icon-${idPrefix}`}
        aria-hidden="true"
        className={cn(
          "my-2 text-[22px] leading-none group-has-[input:checked]:brightness-110",
          placeholder ? "my-2 text-sm tracking-widest text-slate-400 dark:text-slate-500" : "my-1.5 flex items-center justify-center",
        )}
      >
        {iconUrl ? <img src={iconUrl} width={36} height={36} alt="" decoding="async" /> : "…"}
      </div>
      <div
        id={`hour-temp-${idPrefix}`}
        className="text-[15px] font-semibold text-slate-900 group-has-[input:checked]:text-white dark:text-slate-100 dark:group-has-[input:checked]:text-white"
      >
        {temp}
      </div>
    </label>
  );
}
