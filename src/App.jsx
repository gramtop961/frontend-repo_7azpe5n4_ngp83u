import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MessagesPane from "./components/MessagesPane";
import ContentPanels from "./components/ContentPanels";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-4">
        <Sidebar open={sidebarOpen} />

        <main className="pt-4 lg:pt-6 pb-10">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">Dinabite Dashboard</h1>
            <p className="text-sm text-gray-600">Manage all your social messages, posts, and reels in one place.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2">
              <MessagesPane />
            </div>
            <div className="xl:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-semibold text-gray-900">Quick Stats</h2>
                  <span className="text-xs text-gray-500">Last 7 days</span>
                </div>
                <dl className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-indigo-50">
                    <dt className="text-[10px] uppercase tracking-wide text-indigo-700">Messages</dt>
                    <dd className="text-lg font-bold text-indigo-900">248</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-fuchsia-50">
                    <dt className="text-[10px] uppercase tracking-wide text-fuchsia-700">Posts</dt>
                    <dd className="text-lg font-bold text-fuchsia-900">36</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50">
                    <dt className="text-[10px] uppercase tracking-wide text-emerald-700">Reels</dt>
                    <dd className="text-lg font-bold text-emerald-900">12</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ContentPanels />
          </div>
        </main>
      </div>
    </div>
  );
}
