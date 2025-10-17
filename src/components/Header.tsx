import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Process", path: "/process" },
    { label: "AI Brief", path: "/ai-brief" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">A</span>
          </div>
          <span className="text-xl font-bold">AMO AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/crm-login">CRM Login</Link>
          </Button>
          <Button asChild className="gradient-orange border-0">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-muted rounded-lg ${
                  isActive(item.path) ? "text-primary bg-muted" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" asChild>
                <Link to="/crm-login">CRM Login</Link>
              </Button>
              <Button asChild className="gradient-orange border-0">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
