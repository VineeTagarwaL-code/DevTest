import { MediaRoom } from "@/components/MediaRoom";
import CodeAndProblemEditor from "@/components/CodeAndProblemEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Microphone } from "@/components/MicroPhone";

export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-[20%]">
        <MediaRoom chatId={params.id} video={true} audio={true} />
      </ResizablePanel>
      <ResizableHandle className="-z-10" />
      <ResizablePanel className="border-gray-600">
        <CodeAndProblemEditor />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
