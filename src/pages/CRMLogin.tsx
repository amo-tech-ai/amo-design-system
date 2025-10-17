import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CRMLogin = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient">CRM</span> Login
            </h1>
            <p className="text-xl text-muted-foreground">
              Coming soon - CRM login page
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMLogin;
