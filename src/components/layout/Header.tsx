import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { 
      name: 'Features', 
      href: '#features',
      isScroll: true 
    },
    { 
      name: 'Pricing', 
      href: '/pricing',
      isScroll: false 
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navigation[0]) => {
    if (item.isScroll) {
      e.preventDefault();
      if (location.pathname === '/') {
        // If on home page, just scroll
        scrollToSection(item.href.substring(1));
      } else {
        // If on another page, navigate to home page with hash
        window.location.href = '/' + item.href;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={location.pathname === '/' ? item.href : '/' + item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity" asChild>
              <Link to="/register">
                Get Started
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={location.pathname === '/' ? item.href : '/' + item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-primary"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-primary to-blue-600" asChild>
                <Link to="/register">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}