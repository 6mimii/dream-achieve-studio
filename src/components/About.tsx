import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import trainingImage from "@/assets/sergio-training-1.jpg";
import competitionImage from "@/assets/sergio-bodybuilding.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    "ISAK 1",
    "Grado en TAFAD",
    "Máster en Entrenamiento, Nutrición y Salud en la Mujer",
    "Máster en Mejora de la Composición Corporal y Culturismo Natural",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-pearl" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-black mb-4">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3" />
              <img
                src={trainingImage}
                alt="Sergio entrenando"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-deep-black">
              8 Años Transformando Vidas
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Me especializo en el entrenamiento de mujeres, adaptando cada plan según el ciclo menstrual, 
              estilo de vida y objetivos únicos de cada clienta.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con mi experiencia trabajando con todo tipo de personas, sé exactamente cómo crear 
              programas efectivos y personalizados que generan resultados reales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empecé muy joven porque esta es mi pasión. Cada día me motiva ver cómo mis clientes 
              alcanzan sus metas y transforman no solo su físico, sino su vida completa.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 md:order-1 space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-deep-black">
              Certificaciones Profesionales
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="min-w-[8px] h-2 w-2 rounded-full bg-primary mt-2" />
                  <p className="text-lg text-muted-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform -rotate-3" />
              <img
                src={competitionImage}
                alt="Sergio en competición"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;