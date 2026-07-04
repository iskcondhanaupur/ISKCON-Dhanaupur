"use client";

import { motion } from "framer-motion";
import { Lang } from "@/data/content";

interface CourseViewProps {
  t: any;
  lang: Lang;
  onBack: () => void;
}

export default function CourseView({ t, lang, onBack }: CourseViewProps) {
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
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="back-btn mb-8"
        >
          {t.back}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 8, fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            {course.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif', marginBottom: 0 }}>
            {course.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12"
        >
          {course.sections.map((item: any) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-6 shadow-md transition-shadow"
              style={{ background: 'var(--parchment)', borderLeft: '4px solid var(--gold)' }}
            >
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 600, color: 'var(--maroon)', marginBottom: 8 }}>
                {item.name}
              </h3>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: 15, color: 'var(--text)', lineHeight: 1.8, margin: 0 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center rounded-lg p-6"
          style={{ background: 'var(--gold-pale)', border: '1px solid var(--gold)' }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, color: 'var(--maroon)', margin: 0 }}>
            {course.comingSoon}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
