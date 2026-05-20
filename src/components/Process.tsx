import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Diagnóstico',
    description: 'Diagnóstico inicial do negócio ou da ideia.',
  },
  {
    number: 2,
    title: 'Planejamento',
    description: 'Planejamento estratégico alinhado ao perfil do cliente.',
  },
  {
    number: 3,
    title: 'Implantação',
    description: 'Implantação ou reorganização da operação.',
  },
  {
    number: 4,
    title: 'Acompanhamento',
    description: 'Acompanhamento e ajustes conforme a execução.',
  },
  {
    number: 5,
    title: 'Relacionamento',
    description: 'Construção de relacionamento para futuras consultorias.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-6 bg-gema-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-0.5 w-12 bg-gema-olive mb-8" />
          <h2 className="text-4xl md:text-5xl font-playfair text-gema-charcoal mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-lg text-gema-charcoal font-light">
            Menu Degustação em 5 Etapas
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Connecting line */}
            <motion.div
              className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-gema-olive via-gema-bronze to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Circle - Step Number */}
                  <motion.div
                    className="mx-auto mb-6 w-24 h-24 rounded-full bg-gema-olive text-gema-white flex flex-col items-center justify-center shadow-lg border-4 border-gema-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -8 }}
                  >
                    <span className="text-3xl font-playfair font-bold">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="bg-gema-beige p-6 rounded-lg border border-gema-warm-gray hover:border-gema-olive transition-all duration-300">
                    <h3 className="text-lg font-playfair text-gema-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gema-charcoal font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          <motion.div
            className="relative space-y-8 pl-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Vertical line */}
            <motion.div
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gema-olive to-gema-bronze"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Circle indicator */}
                <motion.div
                  className="absolute -left-9 w-8 h-8 rounded-full bg-gema-olive text-gema-white flex items-center justify-center text-xs font-bold border-4 border-gema-white"
                  whileHover={{ scale: 1.2 }}
                >
                  {step.number}
                </motion.div>

                {/* Card */}
                <div className="bg-gema-beige p-6 rounded-lg border border-gema-warm-gray hover:border-gema-olive transition-all duration-300">
                  <h3 className="text-lg font-playfair text-gema-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gema-charcoal font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gema-charcoal font-light mb-6">
            Pronto para começar essa jornada?
          </p>
          <motion.a
            href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20começar%20o%20diagnóstico."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gema-olive text-gema-white rounded-lg font-medium hover:shadow-xl transition-all duration-300"
          >
            Solicitar Primeira Conversa
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
