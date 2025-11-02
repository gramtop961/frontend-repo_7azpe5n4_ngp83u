import { Instagram, Facebook, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";

const sources = {
  Instagram: {
    icon: Instagram,
    color: "bg-pink-100 text-pink-600",
  },
  Facebook: {
    icon: Facebook,
    color: "bg-blue-100 text-blue-600",
  },
  Linkedin: {
    icon: Linkedin,
    color: "bg-sky-100 text-sky-600",
  },
  Twitter: {
    icon: Twitter,
    color: "bg-gray-100 text-gray-700",
  },
};

const mockMessages = [
  {
    id: 1,
    user: "Alex Kim",
    handle: "@alexk",
    platform: "Instagram",
    message: "Loving the new Dinabite features! Scheduling reels is so smooth.",
    time: "2m",
  },
  {
    id: 2,
    user: "Sophie Turner",
    handle: "@sophie.co",
    platform: "Twitter",
    message: "Any tips on best time to post for engagement?",
    time: "14m",
  },
  {
    id: 3,
    user: "Mike Ross",
    handle: "@mross",
    platform: "Facebook",
    message: "We received DMs asking about pricing. Can you share a link?",
    time: "23m",
  },
  {
    id: 4,
    user: "Nina Patel",
    handle: "@ninapatel",
    platform: "Linkedin",
    message: "Just published our case study using Dinabite for growth.",
    time: "1h",
  },
];

export default function MessagesPane() {
  return (
    <section className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Messages</h2>
          <p className="text-xs text-gray-500">All conversations across connected socials</p>
        </div>
        <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-900 text-white hover:bg-gray-800">View Inbox</button>
      </div>
      <ul className="divide-y divide-gray-200">
        {mockMessages.map((m) => {
          const meta = sources[m.platform];
          const Icon = meta.icon;
          return (
            <li key={m.id} className="px-4 py-3 flex items-start gap-3 hover:bg-gray-50">
              <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center ${meta.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="truncate">
                    <span className="font-medium text-sm text-gray-900 mr-1">{m.user}</span>
                    <span className="text-xs text-gray-500">{m.handle} · {m.platform}</span>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{m.time}</span>
                </div>
                <p className="text-sm text-gray-700 mt-0.5 line-clamp-2">{m.message}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-100">
                    <Send className="w-3.5 h-3.5" /> Reply
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mark done
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
