import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className=" flex flex-col items-center sm:flex-row p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className=" flex-1 flex items-center justify-end space-x-4">
          {/* Language select */}

          {/* Session && (

          ) */}

          {/* Darkmode toggle button */}
          <DarkModeToggle />

          {/* User Icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
