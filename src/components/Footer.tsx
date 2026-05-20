import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Quem Somos', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Como Trabalhamos', href: '#process' },
    { label: 'Contato', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gema-charcoal text-gema-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-playfair text-gema-olive font-bold">
              gema
            </h3>
            <p className="text-sm font-light text-gema-beige leading-relaxed max-w-xs">
              Consultoria Gastronômica especializada em estruturar, organizar e otimizar operações de alimentos e bebidas.
            </p>
            <div className="space-y-2 pt-4">
              <p className="text-sm font-light text-gema-olive">
                Estratégia com personalidade.
              </p>
              <p className="text-sm font-light text-gema-bronze">
                Operação com resultado.
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold text-gema-olive uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-gema-beige hover:text-gema-olive transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold text-gema-olive uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5541998959570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-gema-beige hover:text-gema-olive transition-colors duration-300"
                >
                  WhatsApp: (41) 99895-9570
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@gema.com"
                  className="text-sm font-light text-gema-beige hover:text-gema-olive transition-colors duration-300"
                >
                  contato@gema.com
                </a>
              </li>
              <li>
                <p className="text-sm font-light text-gema-beige">
                  Curitiba, PR
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-gema-olive via-gema-bronze to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-gema-warm-gray"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            © {currentYear} GEMA Consultoria Gastronômica. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/consultoriagema/', icon: '📷' },
              { label: 'WhatsApp', href: 'https://wa.me/5541998959570', icon: '💬' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, color: '#556B2F' }}
                className="transition-colors duration-300"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Made by note */}
        <motion.p
          className="text-xs text-gema-warm-gray opacity-60 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Desenvolvido com ❤️ para a GEMA Consultoria Gastronômica
        </motion.p>
      </div>
    </footer>
  );
}
