import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="noor-header sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">Noor to Learn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`noor-nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`noor-nav-link ${isActive('/courses') ? 'active' : ''}`}
            >
              Courses
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-400/30">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                className={`noor-nav-link py-2 ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className={`noor-nav-link py-2 ${isActive('/courses') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
