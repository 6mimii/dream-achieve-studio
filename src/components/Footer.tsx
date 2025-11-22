import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-pearl/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-pearl/60 text-sm">
              © {new Date().getFullYear()} Sergio Arias. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/sergio_ariiaas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pearl/60 hover:text-primary smooth-transition-fast"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;