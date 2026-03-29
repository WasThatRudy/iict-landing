import Image from "next/image";

interface AvatarStackProps {
  avatars: { src: string; alt: string }[];
  label: string;
}

export default function AvatarStack({ avatars, label }: AvatarStackProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="relative rounded-full border border-white overflow-hidden"
            style={{
              width: 30,
              height: 30,
              marginLeft: i === 0 ? 0 : -12,
              zIndex: avatars.length - i,
            }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              sizes="30px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <span
        className="text-[var(--color-text-primary)] whitespace-nowrap"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 13,
        }}
      >
        {label}
      </span>
    </div>
  );
}
