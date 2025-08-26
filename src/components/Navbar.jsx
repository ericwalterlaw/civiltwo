import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building, Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Custom button component to replace shadcn/ui's Button
  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  // Utility function to replace cn() from shadcn/ui
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <nav className={classNames(
      "fixed w-full z-50 top-0 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-[#003366]" />
            <span className="text-2xl font-bold text-[#003366]">NH Constructions</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={classNames(
                  "text-sm font-medium transition-colors hover:text-[#003366]",
                  location.pathname === item.href ? "text-[#003366]" : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              className="text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={classNames(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    location.pathname === item.href 
                      ? "text-[#003366] bg-gray-100" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}