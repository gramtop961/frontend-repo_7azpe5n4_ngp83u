import { Calendar, Send, CheckCircle2, PlayCircle, Image as ImageIcon } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    title: "Product teaser for Dinabite",
    status: "Scheduled",
    date: "Today, 4:30 PM",
    channels: ["Instagram", "Twitter", "LinkedIn"],
    media: "image",
  },
  {
    id: 2,
    title: "Customer story: Growth with automation",
    status: "Draft",
    date: "—",
    channels: ["Facebook"],
    media: "image",
  },
];

const mockReels = [
  {
    id: 1,
    title: "Behind the scenes: Scheduling flow",
    status: "Queued",
    date: "Tomorrow, 10:00 AM",
    channels: ["Instagram"],
    media: "video",
  },
  {
    id: 2,
    title: "Tips: Best times to post",
    status: "Published",
    date: "Yesterday",
    channels: ["TikTok", "Instagram"],
    media: "video",
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700 mr-1">
      {children}
    </span>
  );
}

function Card({ item }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {item.media === "video" ? (
              <PlayCircle className="w-4 h-4 text-purple-600" />
            ) : (
              <ImageIcon className="w-4 h-4 text-indigo-600" />
            )}
            <h4 className="text-sm font-semibold text-gray-900 truncate">{item.title}</h4>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            <span className="font-medium text-gray-700">{item.status}</span>
            <span className="mx-1">•</span>
            <span>{item.date}</span>
          </div>
          <div className="mt-2 truncate">
            {item.channels.map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border border-gray-200 hover:bg-gray-100">
            <Calendar className="w-3.5 h-3.5" /> Schedule
          </button>
          <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800">
            <Send className="w-3.5 h-3.5" /> Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ContentPanels() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Posts</h3>
            <p className="text-xs text-gray-500">Drafts, scheduled and published posts</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-100">Create post</button>
        </div>
        {mockPosts.map((p) => (
          <Card key={p.id} item={p} />
        ))}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Reels</h3>
            <p className="text-xs text-gray-500">Short-form videos across social platforms</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-100">Create reel</button>
        </div>
        {mockReels.map((r) => (
          <Card key={r.id} item={r} />
        ))}
      </section>
    </div>
  );
}
