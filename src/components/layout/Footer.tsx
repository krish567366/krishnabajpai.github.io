import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:krishna@krishnabajpai.me" className="hover:text-foreground transition-colors">
                  krishna@krishnabajpai.me
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="https://www.linkedin.com/in/bajpai-krishna/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="https://github.com/krish567366" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="https://pypi.org/user/bajpai__krishna/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  PyPI Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link to="/case-studies" className="hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link to="/testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Availability</h3>
            <div className="text-sm text-muted-foreground mb-3">
              Currently booking projects for 2026
            </div>
            <div className="text-sm font-sketch text-foreground">
              I only work with 5 clients at a time to ensure exceptional results
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border">
          <div className="font-sketch text-foreground mb-4 md:mb-0">
            Krishna Bajpai © 2025
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
