import { Bell, Search, Sun, Moon } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
};

function Header({ onMenuClick, isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 dark:border-gray-800 dark:bg-gray-900">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          className="btn-icon lg:hidden"
        >
          ☰
        </button>

        <h1 className="section-title">
          Dashboard
        </h1>
      </div>
      {/* Right section */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 md:flex dark:border-gray-800">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="w-32 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:w-48 dark:text-gray-200"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="btn-icon rounded-full"
        >
          <Bell size={20} />
        </button>

        <button
          type="button"
          onClick={onThemeToggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="btn-icon"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            M
          </div>

          <span className="hidden text-sm font-medium text-gray-700 sm:inline">
            Mayank
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
