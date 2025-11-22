import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-pearl/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-display font-bold mb-2">
              <span className="text-pearl">SERGIO</span>
              <span className="gradient-text"> ARIAS</span>
            </div>
            <p className="text-pearl/60 text-sm italic">Sueña y Logra</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://instagram.com/sergio_ariiaas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pearl/5 hover:bg-primary/20 rounded-full flex items-center justify-center smooth-transition group border border-pearl/10 hover:border-primary/30"
            >
              <Instagram className="w-5 h-5 text-pearl group-hover:text-primary smooth-transition" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-pearl/50 text-sm">
              © {new Date().getFullYear()} Sergio Arias. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
