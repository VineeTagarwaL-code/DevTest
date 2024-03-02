import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
const Loader = ({ className }: any) => {
  return (
    <div
      className={cn(
        "flex justify-center py-32  bg-transparent z-10 absolute top-0 left-0 right-0 bottom-0",
        className
      )}
    >
      <Loader2 size={28} className="animate-spin text-purple-600" />
    </div>
  );
};

export default Loader;
