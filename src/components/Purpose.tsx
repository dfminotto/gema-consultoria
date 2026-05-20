import { motion } from 'framer-motion';

export default function Purpose() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gema-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gema-white rounded-full opacity-20 blur-3xl -mr-40 -mt-40" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Decorative line */}
        <motion.div
          className="h-0.5 w-12 bg-gema-olive mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.h2
          className="text-4xl md:text-5xl font-playfair text-gema-charcoal mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nosso Propósito
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gema-charcoal font-light leading-relaxed">
            Ajudar negócios gastronômicos a nascerem, crescerem e se sustentarem com{' '}
            <span className="font-semibold text-gema-olive">processos claros</span>,{' '}
            <span className="font-semibold text-gema-olive">custos controlados</span> e{' '}
            <span className="font-semibold text-gema-olive">identidade bem definida</span>.
          </p>

          {/* Divider */}
          <div className="h-0.5 w-12 bg-gradient-to-r from-gema-olive to-transparent my-8" />

          {/* Sub-points */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              { label: 'Processos', desc: 'Estrutura operacional clara' },
              { label: 'Custos', desc: 'Controle financeiro eficiente' },
              { label: 'Identidade', desc: 'Posicionamento estratégico' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gema-olive mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-gema-charcoal font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
