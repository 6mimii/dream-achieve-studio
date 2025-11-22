import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail } from "lucide-react";
import actionImage from "@/assets/sergio-hyrox-1.jpg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-deep-black relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={actionImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-pearl mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-pearl/70 text-lg md:text-xl max-w-2xl mx-auto">
            Da el primer paso hacia tu transformación
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-pearl/5 backdrop-blur-sm border border-pearl/10 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-pearl mb-4">
                ¿Listo para empezar?
              </h3>
              <p className="text-pearl/70 text-lg leading-relaxed max-w-2xl mx-auto">
                Escríbeme y cuéntame tus objetivos. Diseñaremos juntos el plan perfecto 
                para que alcances tus metas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <motion.a
                href="https://instagram.com/sergio_ariiaas"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 p-6 bg-pearl/5 rounded-2xl hover:bg-pearl/10 smooth-transition border border-pearl/10 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                  <Instagram className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-pearl/60 text-sm mb-1">Instagram</p>
                  <p className="text-pearl font-medium">@sergio_ariiaas</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contacto@sergioarias.com"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 p-6 bg-pearl/5 rounded-2xl hover:bg-pearl/10 smooth-transition border border-pearl/10 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-pearl/60 text-sm mb-1">Email</p>
                  <p className="text-pearl font-medium">Escríbeme</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center pt-8 border-t border-pearl/10"
            >
              <p className="text-4xl md:text-5xl font-display italic gradient-text mb-4">
                Sueña y Logra
              </p>
              <p className="text-pearl/60 text-base">
                Tu transformación comienza hoy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;