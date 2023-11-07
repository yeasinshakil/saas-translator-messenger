"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/logos/logo.png";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className=" overflow-hidden">
      <div className=" w-[150px] h-20 flex justify-center">
        <AspectRatio
          className=" flex justify-center items-center"
          ratio={16 / 9}
        >
          <Image
            priority
            src={logoImage}
            alt="logo"
            className=" dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
