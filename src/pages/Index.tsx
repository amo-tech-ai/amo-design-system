import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, TrendingUp, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const stats = [
    { value: "20+", label: "AI Projects Delivered" },
    { value: "99.8%", label: "Success Rate" },
    { value: "8 Weeks", label: "Average Delivery" },
    { value: "99.9%", label: "System Uptime" },
  ];

  const services = [
    {
      title: "WhatsApp AI Automation",
      description: "Transform customer service with intelligent WhatsApp bots that handle inquiries 24/7.",
      icon: "💬",
    },
    {
      title: "Multi-Agent AI Systems",
      description: "Complex AI workflows with specialized agents working together seamlessly.",
      icon: "🤖",
    },
    {
      title: "Process Automation",
      description: "Streamline operations and eliminate repetitive tasks with custom automation.",
      icon: "⚡",
    },
  ];

  const technologies = [
    "Supabase", "CopilotKit", "CrewAI", "LangChain", "OpenAI", "Anthropic",
    "Vercel", "Next.js", "React", "TypeScript", "Python", "FastAPI"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative section-padding bg-gradient-to-b from-background to-secondary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your Business with </span>
              <span className="text-gradient">AI Applications</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Discover how we've transformed businesses with AI applications delivered in 8 weeks. Real projects. Real results. Real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0 text-lg px-8 py-6">
                <Link to="/projects">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/process">Learn Our Process</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-300">
              Free 30-minute consultation • No commitment required • Expert AI guidance
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI chatbots to complex automation systems, we deliver production-ready solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 space-y-4 card-hover bg-card border-border">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-orange border-0">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              We Build With <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI tools and proven technologies for reliable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-gradient">8 Weeks.</span> Not 8 Months.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-phase process delivers production-ready AI applications fast
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: "1", title: "Design Sprint", weeks: "Week 1", icon: Clock },
              { phase: "2", title: "Build", weeks: "Weeks 2-6", icon: Zap },
              { phase: "3", title: "Test", weeks: "Week 7", icon: Shield },
              { phase: "4", title: "Launch", weeks: "Week 8", icon: TrendingUp },
            ].map((step) => (
              <Card key={step.phase} className="p-6 space-y-4 bg-card border-border">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-gradient">{step.phase}</span>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.weeks}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-orange border-0">
              <Link to="/process">
                See Full Process <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-orange">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Launch in 8 Weeks?
            </h2>
            <p className="text-xl text-white/90">
              Transform your business with AI applications delivered in just 8 weeks. Join the companies already achieving 3× ROI with our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90 border-0">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/ai-brief">Start Your Brief</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} /> Free 30-minute call
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} /> No commitment
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} /> Expert guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
