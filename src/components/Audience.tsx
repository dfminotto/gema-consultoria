import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'Restaurantes, Bares e Cafés',
    description: 'Otimização de cardápios, processos e rentabilidade',
    icon: '🍽️',
  },
  {
    title: 'Confeitarias e Padarias Artesanais',
    description: 'Estruturação de operação e controle de qualidade',
    icon: '🥐',
  },
  {
    title: 'Novos Empreendimentos Gastronômicos',
    description: 'Estruturação completa desde a concepção',
    icon: '🚀',
  },
  {
    title: 'Negócios que Precisam Organizar a Operação',
    description: 'Melhorar resultados e resolver gargalos reais',
    icon: '📊',
  },
];

export default function Audience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-gema-white">
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
          <h2 className="text-4xl md:text-5xl font-playfair text-gema-charcoal">
            Para Quem é a GEMA
          </h2>
        </motion.div>

        {/* Audience Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full bg-gema-beige border-2 border-gema-warm-gray rounded-lg p-8 hover:border-gema-olive transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-playfair text-gema-charcoal mb-4">
                  {audience.title}
                </h3>

                <p className="text-sm text-gema-charcoal font-light leading-relaxed">
                  {audience.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="h-0.5 w-0 bg-gema-olive mt-6"
                  whileHover={{ width: '2rem' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gema-charcoal font-light mb-6">
            Seu negócio se encaixa em um desses perfis?
          </p>
          <motion.a
            href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20conhecer%20a%20consultoria."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gema-olive text-gema-white rounded-lg font-medium hover:shadow-xl transition-all duration-300"
          >
            Solicitar Diagnóstico
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
