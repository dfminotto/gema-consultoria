import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const message = `Olá! Meu nome é ${formData.name}, meu negócio é ${formData.businessType} e gostaria de conhecer a consultoria. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5541998959570?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gema-beige">
      <div className="max-w-5xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-playfair text-gema-charcoal mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Seu negócio gastronômico merece estrutura, clareza e resultado.
          </motion.h2>

          <motion.p
            className="text-xl text-gema-charcoal font-light mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A GEMA une <span className="font-semibold text-gema-olive">estratégia</span> e{' '}
            <span className="font-semibold text-gema-olive">operação</span> para transformar ideias em negócios gastronômicos viáveis e sustentáveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-0.5 w-16 bg-gema-olive mx-auto mb-8" />
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="bg-gema-white rounded-lg p-8 md:p-12 border border-gema-warm-gray shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-playfair text-gema-charcoal mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Vamos conversar?
          </motion.h3>

          <motion.p
            className="text-lg text-gema-charcoal font-light mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conte para nós sobre o seu negócio, sua ideia ou seu desafio gastronômico.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gema-charcoal mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gema-warm-gray rounded-lg font-light focus:outline-none focus:border-gema-olive transition-colors duration-300"
                placeholder="Seu nome"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gema-charcoal mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gema-warm-gray rounded-lg font-light focus:outline-none focus:border-gema-olive transition-colors duration-300"
                placeholder="seu@email.com"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gema-charcoal mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gema-warm-gray rounded-lg font-light focus:outline-none focus:border-gema-olive transition-colors duration-300"
                placeholder="(41) 99999-9999"
              />
            </motion.div>

            {/* Business Type */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gema-charcoal mb-2">
                Tipo de Negócio
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gema-warm-gray rounded-lg font-light focus:outline-none focus:border-gema-olive transition-colors duration-300"
              >
                <option value="">Selecione uma opção</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Bar/Café">Bar/Café</option>
                <option value="Confeitaria">Confeitaria</option>
                <option value="Padaria">Padaria</option>
                <option value="Novo Empreendimento">Novo Empreendimento</option>
                <option value="Outro">Outro</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gema-charcoal mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gema-warm-gray rounded-lg font-light focus:outline-none focus:border-gema-olive transition-colors duration-300 resize-none"
                placeholder="Conte-nos sobre seu desafio gastronômico..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="w-full px-8 py-4 bg-gema-olive text-gema-white rounded-lg font-medium text-lg hover:shadow-xl transition-all duration-300"
            >
              Falar com a GEMA via WhatsApp
            </motion.button>
          </form>

          {/* Contact Methods */}
          <motion.div
            className="mt-12 pt-8 border-t border-gema-warm-gray"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-gema-charcoal mb-6 text-center">
              Prefere conversar diretamente?
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20conhecer%20a%20consultoria."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gema-beige hover:bg-gema-olive hover:text-gema-white transition-all duration-300 border border-gema-warm-gray"
              >
                <span className="text-3xl">💬</span>
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sm font-light">(41) 99895-9570</span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/consultoriagema/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gema-beige hover:bg-gema-olive hover:text-gema-white transition-all duration-300 border border-gema-warm-gray"
              >
                <span className="text-3xl">📷</span>
                <span className="font-semibold">Instagram</span>
                <span className="text-sm font-light">@gemaconsultoria</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contato@gemaconsultoria.com"
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gema-beige hover:bg-gema-olive hover:text-gema-white transition-all duration-300 border border-gema-warm-gray"
              >
                <span className="text-3xl">✉️</span>
                <span className="font-semibold">E-mail</span>
                <span className="text-sm font-light">contato@gema.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
