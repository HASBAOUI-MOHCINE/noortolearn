import { BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="noor-footer mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold">Noor to Learn</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-sm text-blue-100">
            <span>© {currentYear} Noor to Learn. Made with</span>
            <Heart className="h-4 w-4 text-yellow-400 fill-current" />
            <span>for learners everywhere.</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-blue-400/30 text-center text-sm text-blue-100">
          <p>Empowering minds through quality education and innovative learning experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
