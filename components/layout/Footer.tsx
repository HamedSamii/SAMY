import Link from "next/link";
import { MessageCircle, Send, Users, PlayCircle, Briefcase } from "lucide-react";

const cols = [
  ["Samy Overview", "AI Sales and Support", "Chat Inbox", "Flow Builder", "CRM Pipeline", "About Us"],
  ["WhatsApp Automation", "Instagram Automation", "All Channels", "Become a Partner", "Find a Partner"],
  ["Pricing", "Client Reviews", "Customer Cases", "Samy Expert Services", "Shopify Integration", "All Integrations"],
  ["Get a Demo", "Academy", "Knowledge Base", "Blogs", "Support", "API & SDK"],
  ["Chat on WhatsApp", "Email Us", "YouTube", "Terms of Use", "Privacy Policy", "Refund Policy"],
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-6">
        <div className="md:col-span-1">
          <div className="mb-3 inline-block rounded bg-[var(--green)] px-3 py-1 font-mono font-bold text-black">SAMY</div>
          <p className="mb-4 text-sm text-[var(--muted)]">Smarter Chats. Bigger Growth.</p>
          <div className="flex gap-3 text-[var(--muted)]">
            <MessageCircle size={16} />
            <Send size={16} />
            <Users size={16} />
            <PlayCircle size={16} />
            <Briefcase size={16} />
          </div>
        </div>
        {cols.map((items, i) => (
          <div key={i} className="space-y-2 text-sm">
            {items.map((item) => (
              <Link key={item} href="#" className="block text-[var(--muted)] hover:text-[var(--text)]">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted)]">
        Samy © 2025. All rights reserved.
      </div>
    </footer>
  );
}
