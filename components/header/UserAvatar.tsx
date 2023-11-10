import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black dark:text-white ", className)}>
      {image && (
        <Image
          src={image}
          alt={name ? name : ""}
          width={40}
          height={40}
          className=" rounded-full"
        />
      )}

      {name && (
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
