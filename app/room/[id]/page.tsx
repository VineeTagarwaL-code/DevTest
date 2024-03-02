import { MediaRoom } from "@/components/MediaRoom";

export default function RoomPage({ params }: { params: { id: string } }) {
  return <MediaRoom chatId={params.id} video={true} audio={true} />;
}
