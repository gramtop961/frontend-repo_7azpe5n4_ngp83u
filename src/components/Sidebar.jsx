import { Home, MessageSquare, Image as ImageIcon, Film, BarChart2, Settings } from "lucide-react";
import { useMemo } from "react";

export default function Sidebar({ open }) {
  const items = useMemo(
    () => [
      { icon: Home, label: "Overview", active: true },
      { icon: MessageSquare, label: "Messages" },
      { icon: ImageIcon, label: "Posts" },
      { icon: Film, label: "Reels" },
      { icon: BarChart2, label: "Analytics" },
      { icon: Settings, label: "Settings" },
    ],
    []
  );

  return (
    <aside
      className={`${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out`}
    >
      <div className="h-16 border-b border-gray-200 flex items-center px-4 lg:hidden">
        <span className="font-semibold text-gray-900">Navigation</span>
      </div>
      <nav className="p-4 space-y-1">
        {items.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ${
              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 hidden lg:block">
        <div className="p-3 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
          <div className="text-sm font-medium">Connected Accounts</div>
          <div className="mt-2 flex -space-x-2">
            {["IG", "FB", "X", "IN"].map((label, i) => (
              <span key={i} className="h-8 w-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-xs font-bold">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
