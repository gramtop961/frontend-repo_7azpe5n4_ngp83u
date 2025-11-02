import { Bell, Search, Settings, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onToggleSidebar }) {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">D</span>
            <span>Dinabite</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 mx-6 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search messages, posts, creators…"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 shadow-sm">
            New Post
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Settings">
            <Settings className="w-5 h-5" />
          </button>
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="User"
            className="ml-1 h-8 w-8 rounded-full ring-2 ring-indigo-100"
          />
        </div>
      </div>
    </header>
  );
}
