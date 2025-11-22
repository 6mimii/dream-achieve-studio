import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

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
    <section id="plans" className="py-20 md:py-32 bg-deep-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-pearl mb-4">
            Plan de Entrenamiento
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-pearl/70 text-lg md:text-xl max-w-2xl mx-auto">
            Un programa completamente personalizado diseñado para tus objetivos únicos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Decorative gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink-400 to-primary rounded-3xl transform rotate-1" />
            
            <div className="relative bg-deep-black border border-pearl/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-pearl mb-4">
                  Entrenamiento Personalizado
                </h3>
                <p className="text-pearl/70 text-lg">
                  Todo lo que necesitas para tu transformación
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-pearl/5 smooth-transition"
                  >
                    <div className="min-w-[24px] h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-pearl text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center pt-8 border-t border-pearl/10"
              >
                <p className="text-pearl/60 mb-6 text-lg">
                  Inversión personalizada según tus objetivos
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full hover:scale-105 smooth-transition font-medium text-lg"
                >
                  Consultar Disponibilidad
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-pearl/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada plan se adapta específicamente a ti. Trabajaremos juntos para diseñar 
            un programa que se ajuste a tu estilo de vida, necesidades y metas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;