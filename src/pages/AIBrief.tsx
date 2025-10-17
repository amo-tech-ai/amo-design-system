import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const AIBrief = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              AI Project <span className="text-gradient">Brief</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Coming soon - AI Brief form
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIBrief;
