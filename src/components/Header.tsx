import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Quem Somos', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Como Trabalhamos', href: '#process' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-40 bg-gema-white bg-opacity-95 backdrop-blur-md border-b border-gema-warm-gray">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gema-olive font-playfair"
          >
            gema
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gema-charcoal hover:text-gema-olive transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <motion.a
          href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20conhecer%20a%20consultoria."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block px-6 py-2 bg-gema-olive text-gema-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
        >
          Falar Conosco
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-full h-0.5 bg-gema-charcoal rounded-full"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 bg-gema-charcoal rounded-full"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 bg-gema-charcoal rounded-full"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gema-white border-t border-gema-warm-gray"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-gema-charcoal hover:text-gema-olive transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <motion.a
                href="https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20conhecer%20a%20consultoria."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gema-olive text-gema-white rounded-lg font-medium text-sm text-center hover:shadow-lg transition-all duration-300 mt-2"
              >
                Falar Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
