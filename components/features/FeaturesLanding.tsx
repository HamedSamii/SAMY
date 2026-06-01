"use client";

import Link from "next/link";
import Script from "next/script";
import { FeaturesBgCanvas } from "@/components/features/FeaturesBgCanvas";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getFeaturesHeroCopy } from "@/lib/features-copy";
import { dirForLang } from "@/lib/locale";

import "@/styles/features-landing.css";

declare global {
  interface Window {
    filterCat?: (cat: string, el: HTMLElement) => void;
    openFlow?: () => void;
    openInfo?: (id: string) => void;
  }
}

const INTEGRATION_TAGS = [
  "OpenAI",
  "Shopify",
  "Stripe",
  "Zapier",
  "WhatsApp",
  "Make",
  "Google Sheets",
  "WooCommerce",
  "MySQL",
  "PayPal",
  "Gemini",
  "Twilio",
  "GoHighLevel",
  "Cloudinary",
  "Dialogflow",
] as const;

const ANALYTICS_BAR_HEIGHTS = [30, 50, 40, 68, 52, 82, 62, 90, 72, 78, 85, 92];

/** Full-page marketing features from Designs/samy_features_v2.html */
export function FeaturesLanding() {
  const { lang } = useLanguage();
  const dir = dirForLang(lang);
  const hero = getFeaturesHeroCopy(lang);

  return (
    <div id="feat-page-root" className="feat-scope relative z-0 font-sans" dir={dir}>
      <FeaturesBgCanvas />
      <Script src="/samy-features-v2.js" strategy="afterInteractive" />

      <div className="page-hero fu">
        <div className="feat-chip">{hero.chip}</div>
        <h1 className="page-title">
          {hero.titleLine1}
          <br />
          <em>{hero.titleEm}</em>
        </h1>
        <p className="page-sub">{hero.sub}</p>
        <div className="counters">
          <div className="counter-item">
            <div className="counter-num">15+</div>
            <div className="counter-lbl">{hero.counters.channels}</div>
          </div>
          <div className="counter-item">
            <div className="counter-num">30+</div>
            <div className="counter-lbl">{hero.counters.integrations}</div>
          </div>
          <div className="counter-item">
            <div className="counter-num">7</div>
            <div className="counter-lbl">{hero.counters.nodes}</div>
          </div>
          <div className="counter-item">
            <div className="counter-num">∞</div>
            <div className="counter-lbl">{hero.counters.conversations}</div>
          </div>
        </div>
      </div>

      <div className="cat-bar fu">
        <div
          className="cat-pill active"
          role="button"
          tabIndex={0}
          onClick={(e) => window.filterCat?.("all", e.currentTarget)}
          onKeyDown={(e) => e.key === "Enter" && window.filterCat?.("all", e.currentTarget)}
        >
          <div className="cat-dot" style={{ background: "var(--purple)" }} />
          {hero.categories.all}
        </div>
        <div
          className="cat-pill"
          role="button"
          tabIndex={0}
          onClick={(e) => window.filterCat?.("automation", e.currentTarget)}
          onKeyDown={(e) => e.key === "Enter" && window.filterCat?.("automation", e.currentTarget)}
        >
          <div className="cat-dot" style={{ background: "var(--amber)" }} />
          {hero.categories.automation}
        </div>
        <div
          className="cat-pill"
          role="button"
          tabIndex={0}
          onClick={(e) => window.filterCat?.("ai", e.currentTarget)}
          onKeyDown={(e) => e.key === "Enter" && window.filterCat?.("ai", e.currentTarget)}
        >
          <div className="cat-dot" style={{ background: "var(--blue)" }} />
          {hero.categories.ai}
        </div>
        <div
          className="cat-pill"
          role="button"
          tabIndex={0}
          onClick={(e) => window.filterCat?.("channels", e.currentTarget)}
          onKeyDown={(e) => e.key === "Enter" && window.filterCat?.("channels", e.currentTarget)}
        >
          <div className="cat-dot" style={{ background: "var(--green)" }} />
          {hero.categories.channels}
        </div>
        <div
          className="cat-pill"
          role="button"
          tabIndex={0}
          onClick={(e) => window.filterCat?.("analytics", e.currentTarget)}
          onKeyDown={(e) => e.key === "Enter" && window.filterCat?.("analytics", e.currentTarget)}
        >
          <div className="cat-dot" style={{ background: "var(--coral)" }} />
          {hero.categories.analytics}
        </div>
      </div>

      <div className="bento-wrap fu">
        <div className="bento">
          <div
            className="b-card"
            data-cat="automation"
            role="button"
            tabIndex={0}
            onClick={() => window.openFlow?.()}
            onKeyDown={(e) => e.key === "Enter" && window.openFlow?.()}
          >
            <div className="b-visual">
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(circle,rgba(127,119,221,0.08) 1px,transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="flow-strip" style={{ width: "90%", position: "relative", zIndex: 1 }}>
                <div
                  className="fn"
                  style={{
                    background: "rgba(239,159,39,.15)",
                    border: "0.5px solid rgba(239,159,39,.3)",
                    color: "#EF9F27",
                    animationDelay: ".1s",
                  }}
                >
                  ⚡ Trigger
                </div>
                <div className="fl" style={{ animationDelay: ".3s" }} />
                <div
                  className="fn"
                  style={{
                    background: "var(--pd)",
                    border: "0.5px solid var(--pb)",
                    color: "var(--purple)",
                    animationDelay: ".3s",
                  }}
                >
                  💬 Message
                </div>
                <div className="fl" style={{ animationDelay: ".5s" }} />
                <div
                  className="fn"
                  style={{
                    background: "rgba(216,90,48,.1)",
                    border: "0.5px solid rgba(216,90,48,.3)",
                    color: "var(--coral)",
                    animationDelay: ".5s",
                  }}
                >
                  ⚙ Condition
                </div>
                <div className="fl" style={{ animationDelay: ".7s" }} />
                <div
                  className="fn"
                  style={{
                    background: "rgba(29,158,117,.1)",
                    border: "0.5px solid rgba(29,158,117,.3)",
                    color: "var(--green)",
                    animationDelay: ".7s",
                  }}
                >
                  ✓ Action
                </div>
                <div className="fl" style={{ animationDelay: ".9s" }} />
                <div
                  className="fn"
                  style={{
                    background: "rgba(212,83,126,.1)",
                    border: "0.5px solid rgba(212,83,126,.3)",
                    color: "var(--pink)",
                    animationDelay: ".9s",
                  }}
                >
                  👤 Handoff
                </div>
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--amber)" }}>
                Automation
              </div>
              <div className="b-title">Flow Builder — Visual drag-and-drop logic editor</div>
              <div className="b-desc">
                Build complete conversation flows by dragging nodes onto a canvas and connecting them. 7 node types, 3 flow patterns, publish/draft system.
              </div>
              <div className="b-tags">
                <span className="b-tag">Sub Flow</span>
                <span className="b-tag">Workflow</span>
                <span className="b-tag">Function Flow</span>
                <span className="b-tag">7 nodes</span>
                <span className="b-tag">Publish / Draft</span>
              </div>
              <div className="b-cta">→ Try the interactive builder</div>
            </div>
            <div className="b-explore">⤢ Open builder</div>
          </div>

          <div
            className="b-card"
            data-cat="ai"
            role="button"
            tabIndex={0}
            onClick={() => window.openInfo?.("ai")}
            onKeyDown={(e) => e.key === "Enter" && window.openInfo?.("ai")}
          >
            <div className="b-visual">
              <div className="ai-mini" style={{ width: "90%" }}>
                <div className="ai-prompt-m">You are a helpful sales agent. Answer from the knowledge base only.</div>
                <div className="ai-arr">→ AI responds in 0.4s</div>
                <div className="ai-resp-m">Yes! The Floral Dress (SKU-2241) is available in M. Want to order? 🌸</div>
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--blue)" }}>
                AI
              </div>
              <div className="b-title">AI Hub</div>
              <div className="b-desc">
                Full AI agents with web search, MCP servers, and knowledge base. Auto-suggests replies to human agents in real time.
              </div>
              <div className="b-tags">
                <span className="b-tag">AI Agents</span>
                <span className="b-tag">MCP Servers</span>
                <span className="b-tag">Knowledge Base</span>
              </div>
              <div className="b-cta">→ Explore AI Hub</div>
            </div>
            <div className="b-explore">⤢ Explore</div>
          </div>

          <div
            className="b-card"
            data-cat="channels"
            role="button"
            tabIndex={0}
            onClick={() => window.openInfo?.("channels")}
            onKeyDown={(e) => e.key === "Enter" && window.openInfo?.("channels")}
          >
            <div className="b-visual">
              <div className="ch-mini" style={{ width: "90%" }}>
                <div className="ch-btn on">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#25D366">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  WA
                </div>
                <div className="ch-btn on">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E1306C">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  IG
                </div>
                <div className="ch-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  FB
                </div>
                <div className="ch-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  Web
                </div>
                <div className="ch-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2" />
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                  </svg>
                  SMS
                </div>
                <div className="ch-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21.5 2l-9.5 9.5M21.5 2H15M21.5 2V8.5" />
                  </svg>
                  TG
                </div>
                <div className="ch-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2a10 10 0 110 20A10 10 0 0112 2zM2 12h20" />
                  </svg>
                  Voice
                </div>
                <div className="ch-btn" style={{ borderStyle: "dashed", fontSize: "9px", color: "var(--muted)" }}>
                  +8
                </div>
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--green)" }}>
                Channels
              </div>
              <div className="b-title">Omni Channel</div>
              <div className="b-desc">
                Build once, deploy to 15+ channels. WhatsApp, Instagram, Facebook, Voice AI, SMS, Telegram, TikTok and more.
              </div>
              <div className="b-tags">
                <span className="b-tag">15+ channels</span>
                <span className="b-tag">Build once</span>
                <span className="b-tag">Per-channel config</span>
              </div>
              <div className="b-cta">→ All channels</div>
            </div>
            <div className="b-explore">⤢ Explore</div>
          </div>

          <div
            className="b-card"
            data-cat="automation"
            role="button"
            tabIndex={0}
            onClick={() => window.openInfo?.("live")}
            onKeyDown={(e) => e.key === "Enter" && window.openInfo?.("live")}
          >
            <div className="b-visual">
              <div className="queue-mini" style={{ width: "90%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 500 }}>Live Queue</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", color: "var(--green)" }}>
                    <span className="pdot" style={{ width: "5px", height: "5px" }} />
                    3 active
                  </span>
                </div>
                <div className="qr">
                  <div className="qav" style={{ background: "var(--pd)", color: "var(--purple)" }}>
                    AK
                  </div>
                  <div className="qt">Ahmed K. — order inquiry</div>
                  <span className="qb" style={{ background: "rgba(29,158,117,.12)", color: "#1D9E75" }}>
                    Bot
                  </span>
                </div>
                <div className="qr">
                  <div className="qav" style={{ background: "rgba(239,159,39,.15)", color: "#EF9F27" }}>
                    SM
                  </div>
                  <div className="qt">Sara M. — refund request</div>
                  <span className="qb" style={{ background: "rgba(239,159,39,.12)", color: "#EF9F27" }}>
                    Handoff
                  </span>
                </div>
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--pink)" }}>
                Human
              </div>
              <div className="b-title">Live Chat & Handoff</div>
              <div className="b-desc">
                Seamless bot-to-agent handoff with full context. AI suggests replies to agents in real time. Agent groups and queue management.
              </div>
              <div className="b-tags">
                <span className="b-tag">Smart handoff</span>
                <span className="b-tag">Agent groups</span>
                <span className="b-tag">AI suggestions</span>
              </div>
              <div className="b-cta">→ See handoff demo</div>
            </div>
            <div className="b-explore">⤢ Explore</div>
          </div>

          <div
            className="b-card"
            data-cat="analytics"
            role="button"
            tabIndex={0}
            onClick={() => window.openInfo?.("analytics")}
            onKeyDown={(e) => e.key === "Enter" && window.openInfo?.("analytics")}
          >
            <div className="b-visual">
              <div className="an-mini" style={{ width: "92%" }}>
                <div className="an-stats">
                  <div className="an-stat">
                    <div className="an-val" style={{ color: "var(--purple)" }}>
                      4,841
                    </div>
                    <div className="an-lbl">Conversations</div>
                    <div style={{ fontSize: "9px", color: "var(--green)" }}>↑ 31%</div>
                  </div>
                  <div className="an-stat">
                    <div className="an-val" style={{ color: "var(--green)" }}>
                      78%
                    </div>
                    <div className="an-lbl">Resolution</div>
                    <div style={{ fontSize: "9px", color: "var(--green)" }}>↑ 5%</div>
                  </div>
                  <div className="an-stat">
                    <div className="an-val" style={{ color: "var(--amber)" }}>
                      0.4s
                    </div>
                    <div className="an-lbl">Avg response</div>
                    <div style={{ fontSize: "9px", color: "var(--green)" }}>↓ 0.1s</div>
                  </div>
                </div>
                <div className="an-bars">
                  {ANALYTICS_BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="an-bar"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "var(--purple)" : "rgba(127,119,221,0.25)",
                        borderTop: `0.5px solid ${i === 11 ? "var(--pb)" : "transparent"}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--coral)" }}>
                Analytics
              </div>
              <div className="b-title">Analytics & Reporting — Complete visibility into every conversation</div>
              <div className="b-desc">
                Real-time dashboards, agent performance reports, channel breakdown, custom reports, activity heatmaps, and live feed. Know exactly how your bot
                performs.
              </div>
              <div className="b-tags">
                <span className="b-tag">Real-time</span>
                <span className="b-tag">Agent performance</span>
                <span className="b-tag">Custom reports</span>
                <span className="b-tag">Heatmap</span>
                <span className="b-tag">Live feed</span>
              </div>
              <div className="b-cta">→ View analytics dashboard</div>
            </div>
            <div className="b-explore">⤢ Explore</div>
          </div>

          <div
            className="b-card"
            data-cat="ai"
            role="button"
            tabIndex={0}
            onClick={() => window.openInfo?.("integrations")}
            onKeyDown={(e) => e.key === "Enter" && window.openInfo?.("integrations")}
          >
            <div className="b-visual">
              <div className="int-mini" style={{ width: "90%", justifyContent: "center" }}>
                {INTEGRATION_TAGS.map((n) => (
                  <div key={n} className="int-tag">
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div className="b-meta">
              <div className="b-cat" style={{ color: "var(--muted)" }}>
                Connect
              </div>
              <div className="b-title">30+ Integrations — Connect everything your business uses</div>
              <div className="b-desc">
                AI models, ecommerce, payments, CRM, databases, email, and automation platforms. One-click connect for most integrations — no developer needed.
              </div>
              <div className="b-tags">
                <span className="b-tag">One-click</span>
                <span className="b-tag">Inbound webhooks</span>
                <span className="b-tag">No-code</span>
                <span className="b-tag">API access</span>
              </div>
              <div className="b-cta">→ Browse all integrations</div>
            </div>
            <div className="b-explore">⤢ Explore</div>
          </div>
        </div>
      </div>

      <div className="bot-cta fu">
        <div className="bot-cta-in">
          <div className="urgency-badge">
            <span className="pdot" />
            Only 3 new clients this month
          </div>
          <h2 className="cta-title">
            Ready to build your <em>smarter agent?</em>
          </h2>
          <div className="cta-btns">
            <Link href="https://app.samy.agency" className="btn-prim">
              Build your agent free →
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
        </div>
      </div>

      <div id="feat-overlay" className="overlay">
        <div id="feat-overlay-content" style={{ flex: 1, display: "flex", flexDirection: "column" }} />
      </div>

      <div id="feat-drag-ghost" />
      <div id="feat-toast" />
    </div>
  );
}
