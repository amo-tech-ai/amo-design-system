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
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Turn Ideas into{" "}
              <span className="text-gradient">AI-Powered Applications</span>{" "}
              in 8 Weeks
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver production-ready AI applications in just 8 weeks. From WhatsApp automation to complex multi-agent systems, we turn your ideas into reality fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0 text-lg px-8 py-6">
                <Link to="/ai-brief">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/process">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="section-padding gradient-dark text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              We Design and Launch <span className="text-gradient">AI-Powered Platforms</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              From concept to production in 8 weeks. We build intelligent systems that scale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              What We <span className="text-gradient">Build</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 space-y-4 bg-card border-border hover:border-primary transition-colors">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms in Production */}
      <section className="section-padding gradient-dark text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Platforms in <span className="text-gradient">Production</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Real AI applications delivering real results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-card/10 border-white/10 text-white">
              <h3 className="text-2xl font-semibold">FashionOS</h3>
              <p className="text-white/70">AI-powered fashion wholesale platform connecting manufacturers with retailers</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            <Card className="p-8 space-y-4 bg-card/10 border-white/10 text-white">
              <h3 className="text-2xl font-semibold">AutoMax AI</h3>
              <p className="text-white/70">Intelligent dealership assistant handling 1,000+ customer inquiries monthly</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            <Card className="p-8 space-y-4 bg-card/10 border-white/10 text-white">
              <h3 className="text-2xl font-semibold">I Love Medellin</h3>
              <p className="text-white/70">Multi-agent travel assistant providing personalized recommendations 24/7</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-orange border-0">
              <Link to="/projects">
                See All Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Three Pillars of <span className="text-gradient">AI Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-card border-border text-center">
              <div className="text-5xl mx-auto w-fit">🎯</div>
              <h3 className="text-2xl font-semibold">Clear Vision</h3>
              <p className="text-muted-foreground">We start with your business goals and build AI that delivers measurable results</p>
            </Card>
            <Card className="p-8 space-y-4 bg-card border-border text-center">
              <div className="text-5xl mx-auto w-fit">⚡</div>
              <h3 className="text-2xl font-semibold">Speed & AI</h3>
              <p className="text-muted-foreground">8-week delivery using cutting-edge AI tools and proven development processes</p>
            </Card>
            <Card className="p-8 space-y-4 bg-card border-border text-center">
              <div className="text-5xl mx-auto w-fit">🚀</div>
              <h3 className="text-2xl font-semibold">Reliable Delivery</h3>
              <p className="text-muted-foreground">Production-ready systems with 99.9% uptime and ongoing support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding gradient-dark text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              We Build With <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Cutting-edge AI tools and proven technologies for reliable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary transition-colors"
              >
                <span className="font-medium text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-background">
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
              { phase: "Week 1-2", title: "DESIGN SPRINT", icon: "🎨", color: "bg-red-500" },
              { phase: "Week 3-6", title: "DEVELOP", icon: "💻", color: "bg-purple-500" },
              { phase: "Week 7", title: "REFINE", icon: "🔍", color: "bg-blue-500" },
              { phase: "Week 8", title: "LAUNCH", icon: "🚀", color: "bg-green-500" },
            ].map((step, index) => (
              <Card key={index} className="p-8 space-y-4 bg-card border-border text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${step.color} flex items-center justify-center text-3xl`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.phase}</p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Compare that to traditional agencies: 6+ months, unclear timelines, budget overruns
            </p>
            <Button asChild size="lg" className="gradient-orange border-0">
              <Link to="/process">
                See Full Process <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Levels */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Investment Levels
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Clear deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 space-y-6 bg-card border-border">
              <div>
                <h3 className="text-2xl font-bold mb-2">AI PROTOTYPE</h3>
                <div className="text-4xl font-bold text-gradient">$15K-25K</div>
                <p className="text-muted-foreground mt-2">Perfect for validating your AI concept</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">MVP in 4 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Core AI functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">User testing ready</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6 bg-card border-primary border-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">FULL PLATFORM</h3>
                <div className="text-4xl font-bold text-gradient">$35K-55K</div>
                <p className="text-muted-foreground mt-2">Production-ready AI application</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full platform in 8 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-agent AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full deployment & training</span>
                </li>
              </ul>
              <Button className="w-full gradient-orange border-0" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6 bg-card border-border">
              <div>
                <h3 className="text-2xl font-bold mb-2">ENTERPRISE</h3>
                <div className="text-4xl font-bold text-gradient">$75K+</div>
                <p className="text-muted-foreground mt-2">Custom AI solutions at scale</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complex multi-system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated team & support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ongoing optimization</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Brief CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <Card className="p-12 bg-card border-border max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Create Your Project Brief in Minutes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Answer a few quick questions and get a custom AI roadmap for your business
              </p>
              <Button size="lg" className="gradient-orange border-0" asChild>
                <Link to="/ai-brief">
                  Start Your Brief <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
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
