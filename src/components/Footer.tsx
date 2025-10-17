import { Button } from "@/components/ui/button";
import { Linkedin, Github, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-bold">AMO AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              We build AI-powered platforms with speed, automation, and reliability.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <a href="mailto:info@amoai.co" className="hover:text-primary transition-colors">
                  info@amoai.co
                </a>
              </p>
              <p className="text-sm">
                <a href="tel:+14165003053" className="hover:text-primary transition-colors">
                  +1 416-500-3053
                </a>
              </p>
              <p className="text-sm">
                <a href="#" className="hover:text-primary transition-colors">
                  Chat on WhatsApp
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Event Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Multi-Agent Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Backend APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild className="w-full gradient-orange border-0">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 AMO AI — All Rights Reserved
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <span>SOC Live Applications</span>
            <span>6-Week Delivery</span>
            <span>Production-Ready Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
