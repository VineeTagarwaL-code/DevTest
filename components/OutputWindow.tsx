import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface OutputWindowProps {
  output: string;
  isLoading: boolean;
  onClick: () => void;
}

const OutputWindow = ({ output, isLoading, onClick }: OutputWindowProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={onClick}
          className="absolute top-0 right-0 m-3 text-white bg-emerald-700"
        >
          {isLoading ? <Loader className="animate-spin" /> : "Run"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Output</DialogTitle>
        </DialogHeader>
        <div className="h-16 grid place-content-center">
          {isLoading ? <Loader className="animate-spin" /> : output}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OutputWindow;
