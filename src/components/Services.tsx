import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Implantação de Operações Gastronômicas',
    description:
      'Estruturação completa de cozinhas, seja para novos negócios ou operações em reestruturação.',
    items: [
      'Estruturação completa de cozinhas',
      'Definição de fluxos operacionais',
      'Criação de processos',
      'Organização da rotina de produção',
    ],
  },
  {
    number: '02',
    title: 'Engenharia de Cardápio',
    description:
      'Desenvolvimento técnico e estratégico para tornar o cardápio mais eficiente, lucrativo e alinhado à identidade do negócio.',
    items: [
      'Desenvolvimento e padronização de receitas',
      'Fichas técnicas completas',
      'Precificação estratégica',
      'Controle de CMV',
    ],
  },
  {
    number: '03',
    title: 'Gestão e Organização',
    description:
      'Apoio na construção de uma operação mais clara, organizada e sustentável.',
    items: [
      'Criação de rotinas operacionais',
      'Apoio na gestão de estoque',
      'Apoio na gestão de compras',
      'Estruturação de cargos e responsabilidades',
    ],
  },
  {
    number: '04',
    title: 'Consultoria Estratégica',
    description:
      'Diagnóstico e direcionamento prático para melhorar resultados e resolver gargalos reais.',
    items: [
      'Diagnóstico do negócio',
      'Identificação de gargalos',
      'Identificação de oportunidades',
      'Propostas práticas e aplicáveis',
    ],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-gema-beige">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="h-0.5 w-12 bg-gema-olive mb-8" />
          <h2 className="text-4xl md:text-5xl font-playfair text-gema-charcoal mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gema-charcoal font-light">
            Soluções práticas para estruturar, organizar e desenvolver negócios gastronômicos.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-0.5 w-16 bg-gema-olive mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Services */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-gema-white rounded-lg p-8 md:p-10 border-2 border-gema-warm-gray hover:border-gema-olive transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -6 }}
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="text-5xl font-playfair text-gema-olive opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {service.number}
                  </motion.div>

                  {/* Icon placeholder */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gema-beige flex items-center justify-center text-xl"
                    whileHover={{ rotate: 180, backgroundColor: '#556B2F', color: '#FAF9F6' }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-playfair text-gema-charcoal mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gema-charcoal font-light mb-8">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-0.5 w-8 bg-gema-olive mb-8" />

                {/* Items */}
                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-3"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-gema-olive flex items-center justify-center text-xs text-gema-white flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.2 }}
                      >
                        →
                      </motion.div>
                      <p className="text-sm md:text-base text-gema-charcoal font-light">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20solicitar%20um%20diagnóstico."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-gema-olive text-gema-olive font-medium rounded-lg hover:bg-gema-olive hover:text-gema-white transition-all duration-300"
                >
                  Solicitar Diagnóstico
                  <span>→</span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
