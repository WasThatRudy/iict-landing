import Image from "next/image";

export default function PlayButton() {
  return (
    <button
      aria-label="Play conference video"
      className="flex items-center justify-center rounded-full bg-white backdrop-blur-sm transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
      style={{ width: 80, height: 80 }}
    >
      <Image src="/assets/svgs/icon-play.svg" alt="" width={32} height={32} />
    </button>
  );
}
