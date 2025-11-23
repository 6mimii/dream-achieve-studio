import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import actionImage from "@/assets/sergio-hyrox-1.jpg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Me pondré en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                Completa el formulario y cuéntame tus objetivos. Diseñaremos juntos el plan perfecto 
                para que alcances tus metas.
              </p>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 mb-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-pearl/80 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pearl/10 border border-pearl/20 rounded-xl text-pearl placeholder-pearl/40 focus:outline-none focus:border-primary smooth-transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-pearl/80 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pearl/10 border border-pearl/20 rounded-xl text-pearl placeholder-pearl/40 focus:outline-none focus:border-primary smooth-transition"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-pearl/80 text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-pearl/10 border border-pearl/20 rounded-xl text-pearl placeholder-pearl/40 focus:outline-none focus:border-primary smooth-transition"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-pearl/80 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-pearl/10 border border-pearl/20 rounded-xl text-pearl placeholder-pearl/40 focus:outline-none focus:border-primary smooth-transition resize-none"
                  placeholder="Cuéntame sobre tus objetivos y qué te gustaría lograr..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </motion.form>

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