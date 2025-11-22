import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/sergio-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Sergio Arias"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/80 to-deep-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-primary text-lg md:text-xl font-medium mb-4 tracking-wider uppercase"
          >
            Entrenador Personal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-pearl mb-6"
          >
            Sergio Arias
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-4xl font-display italic gradient-text">
              Sueña y Logra
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-pearl/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Especialista en entrenamiento femenino. Transformando vidas a través del fitness personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:scale-105 smooth-transition font-medium text-lg"
            >
              Comienza Tu Transformación
            </a>
            <a
              href="https://instagram.com/sergio_ariiaas"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pearl/30 text-pearl px-8 py-4 rounded-full hover:border-primary hover:text-primary smooth-transition font-medium text-lg flex items-center gap-2"
            >
              <Instagram size={20} />
              Sígueme
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-pearl/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;