import { TypewriterEffectSmoothDemo } from "@/components/ui/typewriter/typewriter";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { MacbookScrollDemo } from "@/components/ui/macBook/macBook";
export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#ffffff] flex flex-col    ">
      <Navbar/>
      <Main />
    </div>
  );
}
