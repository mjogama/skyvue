import { useState } from "react";
import { cn } from "./cn";
import { HeroSection } from "./HeroSection";
import { MainNav } from "./MainNav";
import { MainSection } from "./MainSection";
import { PageFooter } from "./PageFooter";
import { Sidebar } from "./Sidebar";

export default function SkyvueDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [locationQuery, setLocationQuery] = useState<string>("");

  return (
    <div className={cn("min-h-screen font-sans text-[15px] leading-normal transition-colors", darkMode && "dark")}>
      <div className="flex min-h-screen flex-col bg-[#e8ecf4] text-slate-900 transition-colors dark:bg-[#0b0e14] dark:text-slate-100">
        <MainNav
          locationQuery={locationQuery}
          onSearchSubmit={(q) => {
            if (q) setLocationQuery(q);
          }}
          darkMode={darkMode}
          onDarkModeChange={setDarkMode}
        />

        <div id="main-content" className="wrap mx-auto w-full max-w-[min(1600px,100%)] flex-1 px-[clamp(16px,4vw,40px)] pb-[clamp(32px,5vw,56px)]">
          <HeroSection query={locationQuery.trim() !== "" ? locationQuery : "Japan"} />

          <div className="page-layout grid grid-cols-1 items-start gap-5 min-[1101px]:grid-cols-[minmax(0,1fr)_min(360px,34%)] min-[1101px]:gap-9">
            <MainSection />
            <Sidebar />
          </div>

          <PageFooter />
        </div>
      </div>
    </div>
  );
}
