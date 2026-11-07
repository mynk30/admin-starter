import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { navigation, type NavigationItem } from "../../config/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type NavigationEntryProps = {
  item: NavigationItem;
  onNavigate: () => void;
  level?: number;
};

function hasActiveChild(item: NavigationItem, pathname: string): boolean {
  if (item.path) {
    if (item.path === "/") {
      return pathname === "/";
    }

    return pathname === item.path || pathname.startsWith(`${item.path}/`);
  }

  return (
    item.children?.some((child) => hasActiveChild(child, pathname)) ?? false
  );
}

function NavigationEntry({
  item,
  onNavigate,
  level = 0,
}: NavigationEntryProps) {
  const location = useLocation();
  const isActive = hasActiveChild(item, location.pathname);
  const hasChildren = Boolean(item.children?.length);
  const Icon = item.icon;

  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setIsExpanded(true);
    }
  }, [isActive]);

  if (hasChildren) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setIsExpanded((previous) => !previous)}
          aria-expanded={isExpanded}
          className={`nav-item w-full ${
            isActive ? "text-blue-600 dark:text-blue-400" : ""
          } ${level > 0 ? "pl-4" : ""}`}
        >
          {Icon && <Icon size={20} />}

          <span className="flex-1 text-left">{item.label}</span>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-1 space-y-1 border-l border-gray-200 pl-2 dark:border-gray-700">
            {item.children?.map((child) => (
              <NavigationEntry
                key={child.path ?? child.label}
                item={child}
                onNavigate={onNavigate}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!item.path) {
    return null;
  }

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      onClick={onNavigate}
      className={({ isActive: routeIsActive }) =>
        `nav-item ${
          routeIsActive ? "nav-item-active" : ""
        } ${level > 0 ? "pl-4" : ""}`
      }
    >
      {Icon && <Icon size={20} />}
      <span>{item.label}</span>
    </NavLink>
  );
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 overflow-y-auto border-r border-gray-200 bg-white p-4 transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="mb-2 px-2 py-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Admin Panel
          </h2>
          <p className="text-muted">Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navigation.map((item, index) => {
            const previousSection = navigation[index - 1]?.section;

            const showSection = item.section !== previousSection;

            return (
              <div key={item.path ?? item.label}>
                {showSection && item.section && (
                  <p
                    className={`nav-section-title ${index === 0 ? "" : "mt-6"}`}
                  >
                    {item.section}
                  </p>
                )}

                <NavigationEntry item={item} onNavigate={onClose} />
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
