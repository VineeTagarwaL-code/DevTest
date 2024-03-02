import { MediaRoom } from "@/components/MediaRoom";
import CodeEditor from "@/components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-[20%]">
        <MediaRoom chatId={params.id} video={true} audio={true} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <CodeEditor />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
