import Main from "@/components/main";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#111111] flex flex-col    ">
      <Navbar />

      <Main />
    </div>
  );
}
