"use client";

import { motion } from "framer-motion";
import { Lang } from "@/data/content";

interface IYFViewProps {
  t: any;
  lang: Lang;
  onBack: () => void;
}

export default function IYFView({ t, lang, onBack }: IYFViewProps) {
  const iyf = t.iyf;

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
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: 480 }}>
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="back-btn mb-8"
        >
          {t.back}
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: '#8B3A1F', marginBottom: 8, fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            {iyf.title}
          </h1>
          <p style={{ fontSize: 17, color: '#B8860B', fontFamily: 'Cormorant Garamond, serif', marginBottom: 12 }}>
            {iyf.subtitle}
          </p>
          <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, fontFamily: 'Crimson Text, serif' }}>
            {iyf.description}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ background: '#faf6ef', border: '1.5px solid #d4c2a5', borderRadius: 14, padding: '22px', marginBottom: 28 }}
        >
          <p style={{ fontSize: 18, color: '#8B3A1F', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, margin: 0 }}>
            {iyf.mission}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12"
        >
          {iyf.features.map((feature: any) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#D4AF37] hover:shadow-lg transition-all"
            >
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 600, color: '#8B3A1F', marginBottom: 8 }}>
                {feature.name}
              </h3>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, margin: 0 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-[#F5E6D3] rounded-lg p-8 border border-[#D4AF37]"
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, color: '#8B3A1F', margin: 0 }}>
            {iyf.comingSoon}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
