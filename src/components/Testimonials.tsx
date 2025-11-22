import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "María González",
      role: "Cliente desde hace 2 años",
      text: "Sergio cambió completamente mi forma de entrenar. Por primera vez, un entrenador entiende mi cuerpo y adapta todo según mi ciclo. Los resultados han sido increíbles.",
      rating: 5,
      image: transformation1,
      timeframe: "6 meses"
    },
    {
      name: "Laura Martínez",
      role: "Transformación de 6 meses",
      text: "No solo perdí peso, gané confianza. El seguimiento semanal y la atención personalizada hacen toda la diferencia. Sergio siempre está ahí cuando lo necesitas.",
      rating: 5,
      image: transformation2,
      timeframe: "4 meses"
    },
    {
      name: "Ana Rodríguez",
      role: "Cliente desde hace 1 año",
      text: "Probé con muchos entrenadores antes, pero nadie como Sergio. Su conocimiento sobre entrenamiento femenino es excepcional. Recomendado 100%.",
      rating: 5,
      image: transformation3,
      timeframe: "8 meses"
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-pearl relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deep-black/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-deep-black mb-6 tracking-tight">
            Transformaciones Reales
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Historias de éxito que inspiran
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-background rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl smooth-transition h-full border border-border/50 group-hover:border-primary/30">
                {/* Before/After Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={testimonial.image}
                    alt={`Transformación de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.timeframe}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <Quote className="text-primary w-10 h-10 group-hover:scale-110 smooth-transition" />
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.15 + i * 0.05 }}
                        className="w-5 h-5 text-primary fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-deep-black text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-xl mb-8 font-light">
            ¿Listo para escribir tu propia historia de éxito?
          </p>
          <a
            href="#contact"
            className="inline-block group relative px-10 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden font-semibold text-lg tracking-wide hover:scale-105 smooth-transition"
          >
            <span className="relative z-10">Comienza Ahora</span>
            <div className="absolute inset-0 bg-primary/80 scale-x-0 group-hover:scale-x-100 smooth-transition origin-left" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
