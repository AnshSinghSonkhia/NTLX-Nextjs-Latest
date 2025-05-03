import Image from "next/image";

const AvatarGroup = () => {
  const avatars = [
    { alt: "Charles", src: "/avatar/av1.png" },
    { alt: "Victor", src: "/avatar/av2.png" },
    { alt: "Ascsei", src: "/avatar/av3.jpeg" },
    { alt: "Bakir", src: "/avatar/av4.png" },
    { alt: "Sallahudin", src: "/avatar/av5.jpg" },
    { alt: "Tona", src: "/avatar/av6.jpg" },
    { alt: "Andrei", src: "/avatar/av7.jpg" },
    { alt: "Cruz", src: "/avatar/av8.jpg" },
    { alt: "Alan", src: "/avatar/av9.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Avatar Row */}
      <div className="-space-x-4 avatar-group flex justify-center">
        {avatars.map(({ alt, src }, index) => (
          <div
            key={index}
            className="avatar w-11 h-11 border-[2px] rounded-full overflow-hidden"
          >
            <Image
              alt={alt}
              src={src}
              width={44}
              height={44}
              className="object-cover"
              style={{ color: "transparent" }}
            />
          </div>
        ))}
      </div>
  
      {/* Text Below */}
      <p className="italic text-center text-sm">
        <span className="font-bold text-base-content">2,954&nbsp;</span>
        students love our program
      </p>
    </div>
  );  
};

export default AvatarGroup;
