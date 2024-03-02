
import Main from "../components/ui/Main/main";

import { TypewriterEffectSmoothDemo } from "@/components/ui/Main/typewriter/typewriter";
export function LandingPage() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#ffffff] flex flex-col    ">

    <TypewriterEffectSmoothDemo/>
      <Main/>
    
      </div>
    </>
  );
}

export default LandingPage;
