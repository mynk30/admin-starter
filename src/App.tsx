import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    localStorage.setItem("theme", theme);

    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="ml-0 lg:ml-64">
        <Header
          onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
          isDark={isDark}
          onThemeToggle={() => setIsDark((prev) => !prev)}
        />
        <main className="min-w-0 min-h-[calc(100vh-4rem)] bg-gray-50 p-4 sm:p-6 dark:bg-gray-950">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
