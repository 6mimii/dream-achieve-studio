import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const Plans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Plan personalizado de entrenamiento",
    "Plan personalizado de nutrición",
    "Entrenamiento presencial",
    "Dieta personalizada",
    "Seguimiento semanal",
    "Resolución de dudas semanal",
    "Revisión presencial",
  ];

  return (
    <section id="plans" className="py-32 bg-deep-black relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-pearl mb-6 tracking-tight">
            Plan de Entrenamiento
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8" />
          <p className="text-pearl/70 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Un enfoque completamente personalizado para tu transformación
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-pink to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 smooth-transition" />
            
            {/* Card */}
            <div className="relative bg-pearl/5 backdrop-blur-xl border border-pearl/10 rounded-3xl p-10 md:p-16 hover:border-primary/30 smooth-transition">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="text-primary w-8 h-8" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-pearl">
                  Entrenamiento Personalizado
                </h3>
                <Sparkles className="text-primary w-8 h-8" />
              </div>

              <p className="text-pearl/70 text-lg text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                Diseñado específicamente para ti, adaptado a tu cuerpo, tu ciclo y tus objetivos. 
                No hay dos planes iguales.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-pearl/90 text-base leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-center pt-8 border-t border-pearl/10"
              >
                <p className="text-pearl/60 mb-6 text-lg">
                  Precio personalizado según tus objetivos y necesidades
                </p>
                <a
                  href="#contact"
                  className="inline-block group relative px-12 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden font-semibold text-lg tracking-wide hover:scale-105 smooth-transition"
                >
                  <span className="relative z-10">Solicitar Información</span>
                  <div className="absolute inset-0 bg-primary/80 scale-x-0 group-hover:scale-x-100 smooth-transition origin-left" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-pearl/50 text-sm md:text-base italic">
            "El éxito no se mide solo en kilos perdidos, sino en confianza ganada"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
