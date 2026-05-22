import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gema-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="h-0.5 w-12 bg-gema-olive mb-8" />
          <h2 className="text-4xl md:text-5xl font-playfair text-gema-charcoal">
            Quem Somos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gema-charcoal font-light leading-relaxed">
              A <span className="font-semibold text-gema-olive">GEMA Consultoria Gastronômica</span> é uma empresa especializada em estruturar, organizar e otimizar operações de alimentos e bebidas.
            </p>

            <p className="text-lg text-gema-charcoal font-light leading-relaxed">
              Com posicionamento estratégico e personalidade bem definida, atua como parceira do cliente, indo além da simples entrega de um serviço.
            </p>

            <p className="text-lg text-gema-charcoal font-light leading-relaxed">
              O valor da GEMA está na <span className="font-semibold text-gema-olive">visão de negócio</span>, na <span className="font-semibold text-gema-olive">clareza estratégica</span> e na <span className="font-semibold text-gema-olive">capacidade de resolver problemas reais</span> de forma eficiente.
            </p>

            <div className="h-0.5 w-12 bg-gradient-to-r from-gema-olive to-transparent my-8" />

            <p className="text-lg text-gema-charcoal font-light leading-relaxed">
              Fundada por profissionais com experiência prática em cozinha, gestão e consultoria, a GEMA une <span className="font-semibold text-gema-bronze">estratégia e operação</span> para transformar ideias em negócios viáveis e sustentáveis.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            className="relative h-96 md:h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/quem_somos.jpeg"
                alt="Quem Somos"
                fill
                className="object-cover"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-gema-white opacity-20" />
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 border-2 border-gema-olive rounded-lg opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
