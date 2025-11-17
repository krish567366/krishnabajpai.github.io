import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 bg-background border-b border-border fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-sketch text-xl text-foreground">
            Krishna Bajpai
          </Link>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path><path d="M6 6L18 18"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-6">
              <Link 
                to="/services" 
                className={`text-sm ${isActive('/services') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className={`text-sm ${isActive('/case-studies') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                Case Studies
              </Link>
              <Link 
                to="/about" 
                className={`text-sm ${isActive('/about') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                About
              </Link>
              <Link 
                to="/testimonials" 
                className={`text-sm ${isActive('/testimonials') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                Testimonials
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm ${isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                Blog
              </Link>
              <Link 
                to="/real-estate-consortium" 
                className={`text-sm ${isActive('/real-estate-consortium') ? 'text-foreground font-medium' : 'text-muted-foreground'} hover:text-foreground transition-colors`}
              >
                The Consortium
              </Link>
              <Link to="/contact">
                <Button size="sm">Book Consultation</Button>
              </Link>
            </nav>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="py-4 flex flex-col space-y-4 mt-4 border-t border-border">
            <Link 
              to="/services" 
              className={`text-sm ${isActive('/services') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              className={`text-sm ${isActive('/case-studies') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              to="/about" 
              className={`text-sm ${isActive('/about') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm ${isActive('/testimonials') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm ${isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="space-y-2 border-t border-border pt-2">
              <Link 
                to="/real-estate-consortium" 
                className={`text-sm block ${isActive('/real-estate-consortium') ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                The Consortium
              </Link>
            </div>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full">Book Consultation</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
