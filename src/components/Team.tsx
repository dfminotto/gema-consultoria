import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Gabriel Rodrigues',
    role: 'Consultor e CEO',
    description:
      'Formado em Chef de Cozinha & Restaurateur, e em Pâtisserie e Boulangerie pelo Centro Europeu. Possui mais de 8 anos de experiência prática em alguns dos restaurantes mais renomados da cidade de Curitiba, atuando como Chef de cozinha e Chef de produção.',
    skills: [
      'Criação de cardápios',
      'Cultura gastronômica',
      'Processos de produção',
      'Estruturação operacional',
    ],
    initials: 'GR',
  },
  {
    name: 'Melissa Abe Misawa',
    role: 'Consultora e CEO',
    description:
      'Graduada em Tecnologia em Gastronomia pelo Senac, especializada em Pâtisserie pelo Centro Europeu e com MBA em Gestão de Empreendimentos de A&B pela FMU. Possui mais de 4 anos de experiência prática em restaurantes de culinária caiçara, italiana, ibérica e japonesa na cidade de Curitiba, atuando como líder de cozinha, garde manger e pâtisserie.',
    skills: [
      'Gestão de equipes',
      'Especialização técnica',
      'Inovação culinárica',
      'Excelência operacional',
    ],
    initials: 'MM',
  },
];

export default function Team() {
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
    <section className="py-20 md:py-32 px-6 bg-gema-beige">
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
            Nosso Time
          </h2>
          <p className="text-lg text-gema-charcoal font-light">
            Profissionais com experiência real em cozinha e gestão
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gema-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gema-warm-gray">
                {/* Avatar */}
                <div className="h-64 bg-gradient-to-br from-gema-olive to-gema-bronze flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gema-white flex items-center justify-center text-4xl font-playfair text-gema-olive font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {member.initials}
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 border-2 border-gema-white rounded-lg opacity-30"
                    animate={{ rotate: 45 }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-gema-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-gema-olive mb-6">
                    {member.role}
                  </p>

                  <p className="text-sm text-gema-charcoal font-light leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Divider */}
                  <div className="h-0.5 w-8 bg-gema-olive my-6" />

                  {/* Skills */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gema-olive uppercase tracking-widest mb-3">
                      Habilidades Principais
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="text-xs px-3 py-1 bg-gema-beige text-gema-charcoal rounded-full border border-gema-warm-gray"
                          whileHover={{ scale: 1.05, backgroundColor: '#556B2F', color: '#FAF9F6' }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
