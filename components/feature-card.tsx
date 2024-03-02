import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
type FeatureCardProps = {
  icon: any;
  title: string;
  description: string;
};
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div
      className={`flex bg-[#111111] max-w-[370px] px-4 py-6 rounded-md  border-[1px] border-solid border-purple-500 flex-col cursor-pointer shadow-md transition-all hover:shadow-purple-400 `}
    >
      {icon}
      <div className="flex flex-col mt-9">
        <h2
          className={`text-3xl text-gray-300 border-b-[1px] border-solid border-gray-700 pb-3 mb-4 `}
        >
          {title}
        </h2>
        <h5 className={`text-xl text-gray-200 mt-5 tracking-wide`}>
          {description}
        </h5>
      </div>
    </div>
  );
};

export default FeatureCard;
