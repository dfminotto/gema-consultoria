import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setInView(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gema-white via-gema-beige to-gema-warm-gray opacity-40" />
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gema-olive rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gema-bronze rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="font-playfair text-7xl md:text-8xl text-gema-charcoal">
            <span className="text-gema-olive">gema</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-xl md:text-2xl text-gema-charcoal font-source-sans font-light">
              Estratégia com personalidade.
            </p>
            <p className="text-xl md:text-2xl text-gema-bronze font-source-sans font-light">
              Operação com resultado.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gema-olive to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gema-charcoal font-light max-w-2xl mx-auto leading-relaxed"
          >
            Consultoria gastronômica especializada em estruturar, organizar e otimizar operações de alimentos e bebidas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.a
              href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20agendar%20uma%20conversa%20estratégica."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gema-olive text-gema-white rounded-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Agendar Conversa Estratégica
            </motion.a>
            <motion.a
              href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20solicitar%20um%20diagnóstico%20inicial."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-gema-olive text-gema-olive rounded-lg font-medium hover:bg-gema-olive hover:text-gema-white transition-all duration-300"
            >
              Solicitar Diagnóstico Inicial
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 mx-auto text-gema-olive opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}