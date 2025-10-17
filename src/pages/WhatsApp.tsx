import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Clock, TrendingUp, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import whatsappHero from "@/assets/whatsapp-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhatsApp = () => {
  const features = [
    { icon: Clock, title: "24/7 Availability", description: "Never miss a customer inquiry, even outside business hours" },
    { icon: Users, title: "Unlimited Conversations", description: "Handle thousands of conversations simultaneously" },
    { icon: Zap, title: "Instant Responses", description: "Respond to customer queries in milliseconds" },
    { icon: TrendingUp, title: "Lead Qualification", description: "Automatically qualify and route leads to your team" },
  ];

  const useCases = [
    { title: "E-commerce Support", description: "Order tracking, product recommendations, and checkout assistance" },
    { title: "Appointment Booking", description: "Schedule meetings and consultations automatically" },
    { title: "Customer Service", description: "Handle FAQs, troubleshooting, and support tickets" },
    { title: "Lead Generation", description: "Capture and qualify leads 24/7" },
  ];

  const process = [
    { step: "1", title: "Discovery Call", duration: "30 minutes", description: "Understand your business needs and customer journey" },
    { step: "2", title: "Design Sprint", duration: "Week 1", description: "Map conversation flows and design the bot personality" },
    { step: "3", title: "Development", duration: "Weeks 2-5", description: "Build and train your custom WhatsApp AI assistant" },
    { step: "4", title: "Testing & Launch", duration: "Weeks 6-8", description: "Test thoroughly and deploy to production" },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,000",
      period: "one-time",
      features: [
        "Basic conversation flows",
        "Up to 1,000 conversations/month",
        "Email support",
        "2 weeks delivery",
      ],
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "one-time",
      popular: true,
      features: [
        "Advanced AI capabilities",
        "Up to 10,000 conversations/month",
        "Priority support",
        "CRM integration",
        "4 weeks delivery",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited conversations",
        "Multi-agent system",
        "Dedicated support",
        "Custom integrations",
        "8 weeks delivery",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to deploy?",
      answer: "Our standard deployment timeline is 2-8 weeks depending on complexity. We can have a basic bot running in as little as 2 weeks."
    },
    {
      question: "Do you integrate with my existing CRM?",
      answer: "Yes! We integrate with all major CRMs including HubSpot, Salesforce, and custom systems via API."
    },
    {
      question: "What's the ROI of WhatsApp automation?",
      answer: "Our clients typically see 3-5× ROI within the first 6 months through reduced support costs and increased lead conversion."
    },
    {
      question: "Can the bot handle complex conversations?",
      answer: "Absolutely. Our AI-powered bots use advanced natural language processing to understand context and handle multi-turn conversations."
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative section-padding bg-gradient-to-b from-background to-secondary"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${whatsappHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">WhatsApp </span>
              <span className="text-gradient">AI Automation</span>
            </h1>
            <p className="text-xl text-gray-200">
              Transform customer conversations into conversions with intelligent WhatsApp automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground">Solutions that drive revenue</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 space-y-4 card-hover">
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Industry <span className="text-gradient">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 space-y-3">
                <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Implementation <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">Fast & Proven</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="p-6 space-y-4">
                <div className="text-4xl font-bold text-gradient">{item.step}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-primary font-medium">{item.duration}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="section-padding gradient-dark">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              The ROI <span className="text-gradient">Mathematics</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">-60%</div>
                <div className="text-gray-300">Support costs reduced</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">+200%</div>
                <div className="text-gray-300">Lead response speed</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">3-5×</div>
                <div className="text-gray-300">ROI in 6 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Pricing Packages <span className="text-gradient">That Scale</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 space-y-6 relative ${
                  tier.popular ? "border-primary shadow-2xl scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={tier.popular ? "w-full gradient-orange border-0" : "w-full"}
                  variant={tier.popular ? "default" : "outline"}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why <span className="text-gradient">AMO AI?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Production-Ready", description: "We don't deliver prototypes. Every bot is production-ready from day one." },
              { title: "Proven Frameworks", description: "Built on battle-tested AI frameworks like LangChain and CrewAI." },
              { title: "Fast Delivery", description: "8 weeks from concept to launch. Not 8 months." },
              { title: "Ongoing Support", description: "We don't disappear after launch. Continuous optimization included." },
            ].map((item, index) => (
              <Card key={index} className="p-6 space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-primary" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-orange">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Your Next Step: Transform WhatsApp Into Your Revenue Engine
            </h2>
            <p className="text-xl text-white/90">
              Book a free 30-minute consultation to discuss your WhatsApp automation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90 border-0">
                <Link to="/contact">
                  <MessageCircle className="mr-2" /> Book Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/projects">
                  View Case Studies <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/14165003053"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full gradient-orange shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>

      <Footer />
    </div>
  );
};

export default WhatsApp;
