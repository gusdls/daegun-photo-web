"use client";

interface Props {
  url: string;
  fileName: string;
}

export default function DownloadButton({ url, fileName }: Props) {
  const handleClick = () => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          if (typeof reader.result !== "string") return;
          const link = document.createElement("a");
          link.setAttribute("download", fileName);
          link.href = reader.result;
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
        reader.readAsDataURL(blob);
      });
  };
  return (
    <button
      onClick={handleClick}
      className="float-right mt-4 px-6 py-3 rounded bg-green-500 text-white font-semibold text-sm active:bg-green-600"
    >
      다운로드
    </button>
  );
}
