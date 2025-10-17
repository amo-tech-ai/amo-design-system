import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              About <span className="text-gradient">AMO AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Coming soon - About page
            </p>
            <Button asChild className="gradient-orange border-0">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
