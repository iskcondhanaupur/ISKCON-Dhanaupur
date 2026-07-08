"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Flower2, BookDown, PersonStanding } from "lucide-react";
import { Lang } from "@/data/content";
import PageBackground from '@/components/PageBackground'

interface CourseViewProps {
  t: any;
  lang: Lang;
  onBack: () => void;
  onSelectCourse?: (id: string) => void;
}

// Icon + accent color per course, in display order.
// NOTE: green/purple aren't in globals.css yet — add `--course-green` and
// `--course-purple` vars there if you want these theme-controlled instead of hardcoded.
const COURSE_STYLES = [
  { Icon: BookOpen, color: "var(--maroon)" },
  { Icon: Flower2, color: "var(--gold)" },
  { Icon: BookDown, color: "#4a7c59" },
  { Icon: PersonStanding, color: "#7c5ba6" },
];

export default function CourseView({ t, lang, onBack, onSelectCourse }: CourseViewProps) {
  const course = t.course;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section" style={{ background: "transparent" }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 560 }}>
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
          className="text-center mb-10"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5 }} />
            <Flower2 size={20} color="var(--gold)" strokeWidth={1.5} />
            <span style={{ width: 40, height: 1, background: "var(--gold)", opacity: 0.5 }} />
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              color: "var(--maroon)",
              marginBottom: 8,
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            {course.title}
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
            {course.subtitle}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.4 }} />
            <span style={{ color: "var(--gold)", fontSize: 14 }}>❖</span>
            <span style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.4 }} />
          </div>

          {course.description && (
            <p
              style={{
                fontFamily: "Crimson Text, serif",
                fontSize: 16,
                color: "var(--text)",
                lineHeight: 1.7,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              {course.description}
            </p>
          )}
        </motion.div>

        {/* Course cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5 mb-14">
          {course.sections.map((item: any, idx: number) => {
            const { Icon, color } = COURSE_STYLES[idx % COURSE_STYLES.length];
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl shadow-md transition-shadow"
                style={{
                  background: "var(--parchment)",
                  borderLeft: `4px solid ${color}`,
                  padding: "28px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: `color-mix(in srgb, ${color} 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${color} 35%, transparent)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={26} color={color} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "var(--maroon)",
                      marginBottom: 8,
                    }}
                  >
                    {item.name}
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} />
                    <span style={{ color: "var(--gold)", fontSize: 10 }}>❖</span>
                    <span style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} />
                  </div>

                  <p
                    style={{
                      fontFamily: "Crimson Text, serif",
                      fontSize: 15.5,
                      color: "var(--text)",
                      lineHeight: 1.75,
                      margin: "0 0 14px 0",
                    }}
                  >
                    {item.description}
                  </p>

                  <button
                    onClick={() => onSelectCourse?.(item.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--gold)",
                      borderBottom: "1px solid var(--gold)",
                    }}
                  >
                    {course.learnMore || "Learn More"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 60, height: 1, background: "var(--gold)", opacity: 0.4 }} />
            <Flower2 size={18} color="var(--gold)" strokeWidth={1.5} />
            <span style={{ width: 60, height: 1, background: "var(--gold)", opacity: 0.4 }} />
          </div>

          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontSize: 19,
              color: "var(--maroon)",
              margin: "0 0 10px 0",
              lineHeight: 1.6,
            }}
          >
            "{course.quote || "Education is the manifestation of the perfection already in man."}"
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 15,
              color: "var(--gold)",
              margin: 0,
            }}
          >
            — {course.quoteAuthor || "Srila Prabhupada"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
