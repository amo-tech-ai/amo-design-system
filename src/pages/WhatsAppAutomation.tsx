import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MessageCircle, Clock, TrendingUp, Users, ShoppingCart, Calendar, 
  Building2, DollarSign, CheckCircle, ArrowRight, Zap, Shield, BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-[hsl(142,71%,97%)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Automate, Sell & Support — <span className="text-[hsl(142,71%,45%)]">All on WhatsApp</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We help businesses turn WhatsApp into a 24/7 sales and customer service channel — powered by automation, AI agents, and real data. No delays. No missed messages. Just seamless conversations that convert into revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,40%)] text-white">
                  <Link to="/contact">📞 Book a Free WhatsApp Automation Audit</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b">
                  <div className="w-10 h-10 rounded-full bg-[hsl(142,71%,45%)] flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">AMO AI Assistant</p>
                    <p className="text-xs text-muted-foreground">Always Active</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-[hsl(142,71%,95%)] p-3 rounded-lg">
                    <p className="text-sm">Hi! How can I help you today? 👋</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg ml-8">
                    <p className="text-sm">Check my order status</p>
                  </div>
                  <div className="bg-[hsl(142,71%,95%)] p-3 rounded-lg">
                    <p className="text-sm">Your order #4821 is out for delivery! 📦</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(142,71%,45%)]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why WhatsApp Automation Matters
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your customers are already on WhatsApp — we make it work harder for you. Over 2 billion people use WhatsApp daily. AMO AI connects your brand to them with AI-powered chat flows, CRM integrations, and automated campaigns that scale your communication and sales — all through the official WhatsApp Business API.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <div className="text-4xl font-bold text-[hsl(142,71%,45%)]">98%</div>
                <CardTitle>Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">vs 20% for email - your messages actually get seen</p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <div className="text-4xl font-bold text-[hsl(142,71%,45%)]">70%</div>
                <CardTitle>Response Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Customers engage instantly with automated conversations</p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <div className="text-4xl font-bold text-[hsl(142,71%,45%)]">5-10x</div>
                <CardTitle>ROI Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">From automated sales, support, and customer retention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp Automation Setup",
                tagline: "Conversations that run themselves.",
                description: "We set up your verified WhatsApp Business API and build intelligent workflows to greet, qualify, and convert leads automatically.",
                features: ["Auto-replies", "Lead capture", "Payment & order updates", "Multi-language flows"]
              },
              {
                icon: Users,
                title: "AI Chat Agents & Copilots",
                tagline: "Your 24/7 sales and support team.",
                description: "We train AI agents to handle real conversations — qualifying leads, answering FAQs, booking services, and learning from each chat.",
                features: ["Conversational memory", "Smart human handoff", "Personalized tone", "Analytics dashboard"]
              },
              {
                icon: BarChart3,
                title: "CRM & Pipeline Integration",
                tagline: "Every chat becomes a lead.",
                description: "We connect WhatsApp with your CRM or Supabase database so every interaction is tracked, tagged, and measurable.",
                features: ["Lead syncing", "Follow-up automations", "Deal tracking", "Performance reports"]
              },
              {
                icon: TrendingUp,
                title: "WhatsApp Marketing Campaigns",
                tagline: "Broadcast messages that get read.",
                description: "We help you send targeted updates, promotions, and reminders using rich media templates and opt-in lists.",
                features: ["Broadcast scheduling", "Segmentation", "Catalog cards", "Real-time engagement tracking"]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce & Payment Flows",
                tagline: "From chat to checkout in seconds.",
                description: "Sell products or services directly in WhatsApp — with built-in checkout and order confirmations.",
                features: ["Shopify / Stripe integration", "Abandoned cart recovery", "Order updates", "Upsell automations"]
              },
              {
                icon: Building2,
                title: "Industry Solutions",
                tagline: "Tailored automation for every sector.",
                description: "We customize chat journeys for Fashion, Restaurants, Real Estate, Travel, and Education — each with industry-specific flows.",
                features: ["Booking & reservation bots", "Menu & catalog sharing", "Feedback & surveys", "Event registration"]
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover border-2 hover:border-[hsl(142,71%,45%)] transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(142,71%,95%)] flex items-center justify-center mb-4">
                    <service.icon className="text-[hsl(142,71%,45%)]" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm font-semibold text-[hsl(142,71%,45%)] mt-2">{service.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="space-y-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="text-[hsl(142,71%,45%)]" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Use Cases
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <Users className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                <CardTitle className="text-xl">Lead Generation Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ad → WhatsApp chat → AI qualifies lead → CRM sync → Auto follow-up → Payment link → Confirmation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <ShoppingCart className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                <CardTitle className="text-xl">E-commerce Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Customer chats → Browses product catalog → Adds to cart → Pays in-chat → Receives updates
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <Calendar className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                <CardTitle className="text-xl">Service Booking Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Client messages → AI confirms slot → Invoice sent → Booking recorded → CRM updated
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results That Speak */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak
            </h2>
            <p className="text-muted-foreground">Average improvement from AMO AI's WhatsApp automation clients</p>
          </div>
          <div className="bg-gradient-to-br from-[hsl(142,71%,97%)] to-background rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Response time</p>
                <p className="text-2xl font-bold text-red-500 mb-1">2 hours</p>
                <ArrowRight className="text-[hsl(142,71%,45%)] my-2" size={20} />
                <p className="text-2xl font-bold text-[hsl(142,71%,45%)]">&lt; 2 minutes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Missed leads</p>
                <p className="text-2xl font-bold text-red-500 mb-1">40%</p>
                <ArrowRight className="text-[hsl(142,71%,45%)] my-2" size={20} />
                <p className="text-2xl font-bold text-[hsl(142,71%,45%)]">&lt; 5%</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Conversion rate</p>
                <p className="text-2xl font-bold text-red-500 mb-1">12%</p>
                <ArrowRight className="text-[hsl(142,71%,45%)] my-2" size={20} />
                <p className="text-2xl font-bold text-[hsl(142,71%,45%)]">38%</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Customer satisfaction</p>
                <p className="text-2xl font-bold text-red-500 mb-1">7 / 10</p>
                <ArrowRight className="text-[hsl(142,71%,45%)] my-2" size={20} />
                <p className="text-2xl font-bold text-[hsl(142,71%,45%)]">9.4 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMO AI WhatsApp Process */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The AMO AI WhatsApp Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Discovery Call",
                subtitle: "Understand Your Goals",
                description: "We start with a short consultation to map your communication needs, pain points, and automation potential."
              },
              {
                step: "2",
                title: "Workflow Blueprint",
                subtitle: "Design Your Automation Flow",
                description: "Our experts design a custom WhatsApp journey — from first message to sale or booking."
              },
              {
                step: "3",
                title: "Development & Integration",
                subtitle: "Build and Connect Everything",
                description: "We integrate WhatsApp with your CRM, Supabase, n8n, and any payment gateway you use."
              },
              {
                step: "4",
                title: "AI Training & Testing",
                subtitle: "Train Your Chat Agents",
                description: "We teach your Copilot to answer real customer questions, qualify leads, and adapt over time."
              },
              {
                step: "5",
                title: "Launch & Optimize",
                subtitle: "Go Live & Measure Results",
                description: "Once launched, we monitor performance, tweak flows, and report conversions every week."
              }
            ].map((phase, index) => (
              <Card key={index} className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(142,71%,45%)] flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <p className="text-sm font-semibold text-[hsl(142,71%,45%)] mt-2">{phase.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,40%)] text-white">
              <Link to="/contact">👉 Start Your WhatsApp Project</Link>
            </Button>
            <p className="text-sm text-gray-400 mt-4">Launch in as little as <span className="text-[hsl(142,71%,45%)] font-semibold">2 weeks</span></p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Proven Technology
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Supabase", "n8n", "CopilotKit", "CrewAI", "LangChain", "Stripe", "WhatsApp Business API", "Cloudinary", "Webflow"].map((tech, index) => (
              <div key={index} className="bg-muted px-6 py-3 rounded-full text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages - Removed as per new content */}

      {/* FAQ Section */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Do you use the official WhatsApp Business API?",
                answer: "Yes. All systems are built on Meta-approved providers for full compliance and reliability."
              },
              {
                question: "Can I integrate WhatsApp with my CRM or database?",
                answer: "Absolutely. We connect to Supabase, HubSpot, Zoho, or your internal tools."
              },
              {
                question: "Is this AI or just a bot?",
                answer: "Both. We use automation (n8n) for structured tasks and AI agents (CrewAI + LangGraph) for intelligent responses."
              },
              {
                question: "How long does setup take?",
                answer: "Most projects are fully live within 2–4 weeks of onboarding."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[hsl(0,0%,18%)] rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-white hover:text-[hsl(142,71%,45%)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[hsl(142,71%,45%)] to-[hsl(142,71%,35%)] text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's automate your business on WhatsApp — start today.
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you want faster sales responses, automated booking, or AI-driven campaigns, our team will design and deploy your WhatsApp system — from strategy to launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[hsl(142,71%,45%)] hover:bg-white/90">
                <Link to="/contact">📞 Book a Demo Call</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="mr-2" size={20} />
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">💬 Chat with Us on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppAutomation;
