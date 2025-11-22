import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/sergio-profile.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-deep-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/50 via-deep-black/30 to-deep-black z-10" />
        <img
          src={heroImage}
          alt="Sergio Arias - Personal Trainer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-pearl mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            SERGIO
            <br />
            <span className="gradient-text">ARIAS</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-pearl/80 mb-12 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Entrenador Personal Especializado
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#contact"
              className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden font-medium text-lg tracking-wide hover:scale-105 smooth-transition"
            >
              <span className="relative z-10">Empieza tu Transformación</span>
              <div className="absolute inset-0 bg-primary/80 scale-x-0 group-hover:scale-x-100 smooth-transition origin-left" />
            </a>
            
            <a
              href="#about"
              className="px-10 py-4 border-2 border-pearl/30 text-pearl rounded-full hover:bg-pearl/10 hover:border-pearl smooth-transition font-medium text-lg tracking-wide"
            >
              Conoce mi Método
            </a>
          </motion.div>

          <motion.div
            className="mt-20 italic text-2xl md:text-3xl gradient-text font-display font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Sueña y Logra
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ChevronDown className="text-pearl/50 w-8 h-8" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
