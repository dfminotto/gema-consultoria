import { motion } from 'framer-motion';

const differentials = [
  {
    title: 'Parceria Estratégica',
    description: 'Atuação como parceira estratégica, não apenas prestadora de serviço',
  },
  {
    title: 'Experiência Real',
    description: 'Experiência real de cozinha aliada à visão de gestão',
  },
  {
    title: 'Personalização Total',
    description: 'Consultoria personalizada, sem soluções genéricas',
  },
  {
    title: 'Clareza de Processos',
    description: 'Clareza de processos, custos e tomada de decisão',
  },
  {
    title: 'Resultados Mensuráveis',
    description: 'Foco em resultados práticos, sustentáveis e mensuráveis',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gema-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gema-olive rounded-full opacity-5 blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gema-bronze rounded-full opacity-5 blur-3xl -ml-40 -mb-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-0.5 w-12 bg-gema-olive mb-8" />
          <h2 className="text-4xl md:text-5xl font-playfair text-gema-white mb-4">
            Nosso Diferencial
          </h2>
          <p className="text-lg text-gema-beige font-light">
            O que nos torna únicos na consultoria gastronômica
          </p>
        </motion.div>

        {/* Grid with image and text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gema-olive to-gema-bronze rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-gema-white opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gema-white opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Right - Differentials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                className="group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-6">
                  {/* Number */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gema-olive flex items-center justify-center text-gema-white font-playfair text-lg font-bold group-hover:scale-110 transition-transform duration-300"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair text-gema-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-gema-beige font-light leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <motion.div
                  className="h-0.5 bg-gema-olive opacity-0 mt-4 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
