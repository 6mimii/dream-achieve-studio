import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import trainingImage from "@/assets/sergio-training-1.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Award, value: "8+", label: "Años de Experiencia" },
    { icon: Users, value: "200+", label: "Clientes Transformados" },
    { icon: Heart, value: "100%", label: "Dedicación" },
    { icon: TrendingUp, value: "∞", label: "Evolución Constante" },
  ];

  const certifications = [
    "ISAK 1",
    "Grado en TAFAD",
    "Master en Entrenamiento, Nutrición y Salud en la Mujer",
    "Máster en Mejora de la Composición Corporal y Culturismo Natural"
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-pearl overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-deep-black mb-6 tracking-tight">
            Sobre Mí
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={trainingImage}
              alt="Sergio Training"
              className="rounded-3xl w-full max-w-md shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-deep-black mb-6">
              Especialista en Entrenamiento Femenino
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con <span className="text-primary font-semibold">8 años de experiencia</span>, me especializo en el entrenamiento de mujeres, 
              adaptando cada programa según el ciclo menstrual, estilo de vida y objetivos personales.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi pasión por el fitness comenzó desde muy joven, y desde entonces he ayudado a 
              cientos de personas a alcanzar sus objetivos, transformando no solo sus cuerpos, 
              sino también su mentalidad y estilo de vida.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <h4 className="text-xl font-display font-semibold text-deep-black mb-4">Certificaciones</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background rounded-2xl p-8 text-center shadow-lg border border-border/50 group hover:border-primary/50 smooth-transition"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 smooth-transition" />
              <div className="text-4xl font-display font-bold text-deep-black mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
