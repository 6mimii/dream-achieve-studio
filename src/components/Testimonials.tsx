import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "María González",
      role: "Cliente desde hace 2 años",
      text: "Sergio cambió completamente mi forma de entrenar. Por primera vez, un entrenador entiende mi cuerpo y adapta todo según mi ciclo. Los resultados han sido increíbles.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      role: "Transformación de 6 meses",
      text: "No solo perdí peso, gané confianza. El seguimiento semanal y la atención personalizada hacen toda la diferencia. Sergio siempre está ahí cuando lo necesitas.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      role: "Cliente desde hace 1 año",
      text: "Probé con muchos entrenadores antes, pero nadie como Sergio. Su conocimiento sobre entrenamiento femenino es excepcional. Recomendado 100%.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-pearl" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-black mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Lo que dicen quienes ya transformaron sus vidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl smooth-transition h-full border border-border/50">
                <div className="mb-6">
                  <Quote className="text-primary w-10 h-10" />
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-deep-black">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg mb-6">
            ¿Listo para escribir tu propia historia de éxito?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:scale-105 smooth-transition font-medium"
          >
            Comienza Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;