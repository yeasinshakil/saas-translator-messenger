import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className=" sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className=" flex flex-col items-center sm:flex-row p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className=" flex-1 flex items-center justify-end space-x-4">
          {/* Language select */}

          {/* Session && (

          ) */}

          {session ? (
            <>
              <Link href={"/chat"}>
                <MessagesSquare className=" text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"}>Pricing</Link>
          )}

          {/* Darkmode toggle button */}
          <DarkModeToggle />
          <UserButton session={session} />

          {/* User Icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
