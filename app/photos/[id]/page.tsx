import DownloadButton from "@/components/DownloadButton";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

interface Props {
  params: { id: string };
}

function fetchPhoto(id: string) {
  const supabase = createClient();
  const { data } = supabase.storage
    .from("photos")
    .getPublicUrl(`uploads/${id}.png`);
  return data;
}

export default function PhotoPage({ params }: Props) {
  const photo = fetchPhoto(params.id);
  return (
    <div className="max-w-md w-full h-screen mx-auto py-12 px-8 sm:px-10">
      <Image
        src={photo.publicUrl}
        alt="Photo image"
        width={450}
        height={600}
        className="shadow-2xl"
      />
      <DownloadButton url={photo.publicUrl} fileName="image.png" />
    </div>
  );
}
