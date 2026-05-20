import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappLink = 'https://wa.me/5541998959570?text=Olá,%20vim%20pelo%20site%20da%20GEMA%20e%20gostaria%20de%20conhecer%20a%20consultoria.';

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gema-olive text-gema-white px-6 py-4 rounded-full shadow-2xl cursor-pointer group overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gema-olive rounded-full opacity-0 group-hover:opacity-30"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* WhatsApp Icon */}
        <motion.div
          className="relative z-10"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-.959.458-1.844 1.089-2.595 1.876C4.322 9.505 3.74 10.708 3.487 12c-.253 1.292-.199 2.694.153 3.996.352 1.303 1.001 2.502 1.85 3.529.849 1.028 1.887 1.867 3.046 2.459 1.159.592 2.418.928 3.720.981 1.303.053 2.584-.163 3.78-.608 1.196-.445 2.27-1.145 3.135-2.049.865-.904 1.507-1.984 1.86-3.163.353-1.179.444-2.426.268-3.644-.176-1.218-.67-2.37-1.422-3.36-.752-.99-1.75-1.783-2.869-2.301-1.12-.518-2.355-.76-3.597-.72zm0 0" />
          </svg>
        </motion.div>

        {/* Text */}
        <motion.span
          className="relative z-10 font-medium text-sm whitespace-nowrap"
          animate={isHovered ? { x: 4 } : { x: 0 }}
        >
          Falar com a GEMA
        </motion.span>

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 border-2 border-gema-olive rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.2],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{ position: 'absolute' }}
        />
      </motion.a>
    </motion.div>
  );
}
