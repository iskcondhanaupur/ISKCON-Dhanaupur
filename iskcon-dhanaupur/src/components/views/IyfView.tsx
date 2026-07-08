"use client";

import { motion } from "framer-motion";
import PageBackground from '@/components/PageBackground'
import {
  ArrowRight,
  Flower2,
  Users,
  BookOpen,
  User,
  Calendar,
} from "lucide-react";
import { Lang } from "@/data/content";

interface IYFViewProps {
  t: any;
  lang: Lang;
  onBack: () => void;
  onSelectFeature?: (id: string) => void;
}

// Stat icons, in display order (Youth Members, Weekly Sessions, Mentors, Spiritual Events)
const STAT_ICONS = [Users, BookOpen, User, Calendar];

// Feature icon + accent color per card, in display order.
// NOTE: green/purple/blue aren't in globals.css yet — add CSS vars there
// (e.g. --iyf-green, --iyf-purple, --iyf-blue) if you want these theme-controlled.
const FEATURE_STYLES = [
  { Icon: BookOpen, color: "#c8862a" },
  { Icon: Users, color: "#5a8a52" },
  { Icon: Calendar, color: "#8b6bb0" },
  { Icon: User, color: "#3a7ca5" },
];

export default function IYFView({ t, lang, onBack, onSelectFeature }: IYFViewProps) {
  const iyf = t.iyf;

  const defaultStats = [
    { value: "", label: "Youth Members" },
    { value: "", label: "Weekly Sessions" },
    { value: "", label: "Mentors" },
    { value: "", label: "Spiritual Events" },
  ];
  const stats = iyf.stats || defaultStats;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section" style={{ background: "transparent" }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 620 }}>
        {/* Back link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="back-btn mb-8"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            color: "var(--gold)",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {t.back || "Back"}
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5 }} />
            <Flower2 size={20} color="var(--gold)" strokeWidth={1.5} />
            <span style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5 }} />
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              color: "var(--maroon)",
              marginBottom: 8,
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 700,
            }}
          >
            {iyf.title}
          </h1>

          <p
            style={{
              fontSize: 19,
              color: "var(--gold)",
              fontFamily: "Cormorant Garamond, serif",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            {iyf.subtitle}
          </p>

          <p
            style={{
              fontSize: 15.5,
              color: "var(--text)",
              lineHeight: 1.8,
              fontFamily: "Crimson Text, serif",
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            {iyf.description}
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
          <span style={{ width: 60, height: 1, background: "var(--gold)", opacity: 0.4 }} />
          <span style={{ color: "var(--gold)", fontSize: 14 }}>❖</span>
          <span style={{ width: 60, height: 1, background: "var(--gold)", opacity: 0.4 }} />
        </div>

        {/* Mission banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            background: "var(--parchment)",
            border: "1.5px solid var(--gold)",
            borderRadius: 14,
            padding: "18px 24px",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 19,
              color: "var(--maroon)",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
              margin: 0,
            }}
          >
            🌿 {iyf.mission} 🌿
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            background: "var(--parchment)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "28px 12px",
            marginBottom: 32,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {stats.map((stat: any, idx: number) => {
            const StatIcon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  borderRight: idx < stats.length - 1 ? "1px solid var(--border)" : "none",
                  padding: "0 6px",
                }}
              >
                <StatIcon
                  size={26}
                  color="var(--gold)"
                  strokeWidth={1.5}
                  style={{ margin: "0 auto 10px" }}
                />
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(20px, 4vw, 26px)",
                    fontWeight: 700,
                    color: "var(--maroon)",
                    marginBottom: 4,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Crimson Text, serif",
                    fontSize: 12.5,
                    color: "var(--text)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Feature cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5 mb-10">
          {iyf.features.map((feature: any, idx: number) => {
            const { Icon, color } = FEATURE_STYLES[idx % FEATURE_STYLES.length];
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl shadow-md transition-all"
                style={{
                  background: "var(--parchment)",
                  borderLeft: `4px solid ${color}`,
                  padding: "24px 26px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} color="#fff" strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--maroon)",
                      marginBottom: 6,
                    }}
                  >
                    {feature.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Crimson Text, serif",
                        fontSize: 15,
                        color: "var(--text)",
                        lineHeight: 1.7,
                        margin: 0,
                        flex: 1,
                        minWidth: 180,
                      }}
                    >
                      {feature.description}
                    </p>
                    <button
                      onClick={() => onSelectFeature?.(feature.id)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--gold)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {iyf.learnMore || "Learn More"}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center rounded-2xl"
          style={{
            background: "var(--gold-pale)",
            border: "1px solid var(--gold)",
            padding: "36px 24px",
            marginBottom: 32,
          }}
        >
          <h3
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 26,
              fontWeight: 700,
              color: "var(--maroon)",
              marginBottom: 8,
            }}
          >
            {iyf.ctaTitle || "Ready to Begin Your Journey?"}
          </h3>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} />
            <span style={{ color: "var(--gold)", fontSize: 10 }}>❖</span>
            <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} />
          </div>

          <p
            style={{
              fontFamily: "Crimson Text, serif",
              fontSize: 15.5,
              color: "var(--text)",
              marginBottom: 22,
            }}
          >
            {iyf.ctaSubtitle || "Join the ISKCON Youth Forum and be a part of something divine."}
          </p>

          <button
            onClick={() => onSelectFeature?.("become-member")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--gold)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 17,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {iyf.ctaButton || "Become a Member"}
            <ArrowRight size={17} />
          </button>
        </motion.div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
          style={{ paddingBottom: 8 }}
        >
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontSize: 16.5,
              color: "var(--maroon)",
              margin: "0 0 8px 0",
              lineHeight: 1.6,
            }}
          >
            "{iyf.quote || "The youth are the future of ISKCON. Empower them with knowledge, devotion and association."}"
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 14,
              color: "var(--gold)",
              margin: 0,
            }}
          >
            — {iyf.quoteAuthor || "Srila Prabhupada"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
