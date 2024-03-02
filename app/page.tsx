import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { MacbookScrollDemo } from "@/components/ui/macBook/macBook";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#111111] flex flex-col  overflow-hidden">
      <Navbar />
      <Main />
      <MacbookScrollDemo />
      <Footer/>
    </div>
  );
}
