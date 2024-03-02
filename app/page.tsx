import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { MacbookScrollDemo } from "@/components/ui/macBook/macBook";
import { Tally1, Target, Tally2 } from "lucide-react";
import FeatureCard from "@/components/feature-card";
const Different: any = [
  {
    icon: <Tally1 className="text-purple-600 mb-6" size={40} />,
    title: "Handicapped Freindly",
    description:
      "We've implemented custom voice typing capabilities for both the interviewer and interviewee, enhancing the overall experience with advanced features tailored to streamline communication and facilitate a smoother interaction.",
  },
  {
    icon: <Tally2 className="text-purple-600 mb-6" size={40} />,
    title: "Easy Implementation",
    description:
      "Easy Implementation: Transform your collaborative coding experience with a groundbreaking multiplayer arena. With just one click, effortlessly initiate and set up your coding sessions, streamlining the process for instant, hassle-free collaboration",
  },
];
const Features: any = [
  {
    icon: <Target className="text-purple-600 mb-6" size={40} />,
    title: "Multiplayer Coding Arena",
    description:
      "Forge seamless collaboration within your team as you collectively navigate the realms of real-time interaction, effortlessly intertwining code creation and communication in a unified and exhilarating space of unparalleled productivity.",
  },
  {
    icon: <Target className="text-purple-600 mb-6" size={40} />,
    title: "Code Persistence",
    description:
      "Never lose your progress! With 'Code Persistence,' your work stays safe even if you close and reopen your web browser. It's like having your own coding time machine, allowing you to seamlessly continue where you left off and keep the collaboration flowing smoothly in our user-friendly space.",
  },
  {
    icon: <Target className="text-purple-600 mb-6" size={40} />,
    title: "Multiplayer Coding Arena",
    description:
      "Forge seamless collaboration within your team as you collectively navigate the realms of real-time interaction, effortlessly intertwining code creation and communication in a unified and exhilarating space of unparalleled productivity.",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#111111] flex flex-col  overflow-hidden">
      <Navbar />
      <Main />
      <div className="flex flex-col px-16 py-4 w-full justify-center items-center ">
        <h1 className="text-3xl text-gray-600 font-bold mb-8 tracking-wider cursor-pointer hover:text-purple-600">
          WHAT MAKES US DIFFERENT ?
        </h1>
        <div className="flex flex-wrap gap-16">
          {Different.map((feature: any) => {
            return <FeatureCard {...feature} key={feature.title} />;
          })}
        </div>
      </div>

      <div className="flex flex-col px-16 py-4 w-full justify-center items-center ">
        <h1 className="text-3xl text-gray-600 font-bold mb-8 tracking-wider cursor-pointer hover:text-purple-600">
          FEATURES
        </h1>
        <div className="flex flex-wrap gap-8">
          {Features.map((feature: any) => {
            return <FeatureCard {...feature} key={feature.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
