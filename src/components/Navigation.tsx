import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="font-sketch font-bold text-xl text-foreground hover:text-accent transition-colors"
          >
            Krishna Bajpai
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
            <Link 
              to="/case-studies"
              className={`transition-colors ${isActive('/case-studies') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Case Studies
            </Link>
            <Link 
              to="/services"
              className={`transition-colors ${isActive('/services') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Services
            </Link>
            <Link 
              to="/testimonials"
              className={`transition-colors ${isActive('/testimonials') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/real-estate-consortium"
              className={`transition-colors ${isActive('/real-estate-consortium') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Consortium
            </Link>
            <Button size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;