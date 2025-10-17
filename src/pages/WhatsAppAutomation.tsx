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
                WhatsApp Automation <span className="text-[hsl(142,71%,45%)]">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform WhatsApp into your most powerful business channel with AI-driven automation that scales customer engagement and revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,40%)] text-white">
                  <Link to="/contact">Start a WhatsApp Project</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/process">See How It Works</Link>
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
              The Strategic Advantage: Why Smart Businesses Choose WhatsApp
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              WhatsApp isn't just messaging—it's the most direct line to your customers with unmatched engagement rates.
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

      {/* What We Build */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Build: Solutions That Drive Revenue
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From customer service to sales automation, we create WhatsApp experiences that scale your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "AI Customer Support",
                description: "24/7 instant responses that resolve 80% of inquiries automatically"
              },
              {
                icon: ShoppingCart,
                title: "Sales & E-commerce",
                description: "Product catalogs, order tracking, and automated checkout flows"
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                description: "Smart scheduling with confirmations, reminders, and rescheduling"
              },
              {
                icon: Users,
                title: "Lead Generation",
                description: "Qualify leads, collect info, and route to sales teams instantly"
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover border-2 hover:border-[hsl(142,71%,45%)] transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(142,71%,95%)] flex items-center justify-center mb-4">
                    <service.icon className="text-[hsl(142,71%,45%)]" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Solutions That Drive Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <Building2 className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                <CardTitle className="text-2xl">E-commerce & Retail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Automated order updates, product recommendations, and abandoned cart recovery that converts browsers into buyers.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Real-time order tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Personalized product catalogs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Automated cart recovery</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
              <CardHeader>
                <Users className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                <CardTitle className="text-2xl">Service Businesses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">Smart booking systems, service reminders, and customer communication that keeps your calendar full.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Automated appointment scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Service reminders & follow-ups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[hsl(142,71%,45%)]" size={18} />
                    <span>Customer feedback collection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Mathematics */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The ROI Mathematics: <span className="text-[hsl(142,71%,45%)]">Real Client Data</span>
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[hsl(142,71%,97%)] to-background rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">E-commerce Client Case Study</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Monthly Conversations</span>
                    <span className="font-bold">12,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Automation Rate</span>
                    <span className="font-bold text-[hsl(142,71%,45%)]">85%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Avg. Order Value</span>
                    <span className="font-bold">$87</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Conversion Rate</span>
                    <span className="font-bold text-[hsl(142,71%,45%)]">12%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <p className="text-sm text-muted-foreground mb-2">Monthly Revenue Impact</p>
                  <p className="text-4xl font-bold text-[hsl(142,71%,45%)] mb-4">$125,280</p>
                  <p className="text-sm text-muted-foreground mb-2">Implementation Investment</p>
                  <p className="text-2xl font-bold mb-4">$8,500</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-1">First Month ROI</p>
                    <p className="text-3xl font-bold text-[hsl(142,71%,45%)]">14.7x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Implementation Process: Clear & Proven
            </h2>
            <p className="text-lg text-gray-300">4 structured phases from discovery to scale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1. Discovery",
                title: "Map Your Flows",
                items: ["Analyze customer journeys", "Define automation opportunities", "Set KPIs & success metrics"],
                duration: "Week 1"
              },
              {
                step: "2. Design",
                title: "Build the Blueprint",
                items: ["Conversation flow design", "Integration planning", "Approval & refinement"],
                duration: "Week 2"
              },
              {
                step: "3. Development",
                title: "Build & Test",
                items: ["AI training & setup", "System integrations", "Quality assurance testing"],
                duration: "Weeks 3-4"
              },
              {
                step: "4. Deploy",
                title: "Launch & Optimize",
                items: ["Gradual rollout", "Performance monitoring", "Continuous optimization"],
                duration: "Weeks 5-6"
              }
            ].map((phase, index) => (
              <Card key={index} className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white">
                <CardHeader>
                  <div className="text-[hsl(142,71%,45%)] font-bold mb-2">{phase.step}</div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <p className="text-sm text-gray-400">{phase.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="text-[hsl(142,71%,45%)] mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-[hsl(142,71%,45%)] text-white px-6 py-3 rounded-full">
              <Clock size={20} />
              <span className="font-semibold">Average Time to Launch: 6 Weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing Packages That Pay For Themselves
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$3,500",
                description: "Perfect for small businesses testing WhatsApp automation",
                features: [
                  "Single automated flow",
                  "Up to 1,000 conversations/month",
                  "Basic analytics dashboard",
                  "Email support",
                  "2 weeks implementation"
                ]
              },
              {
                name: "Professional",
                price: "$8,500",
                description: "Ideal for growing businesses scaling customer engagement",
                features: [
                  "3 automated flows",
                  "Up to 10,000 conversations/month",
                  "Advanced analytics & insights",
                  "CRM integration",
                  "Priority support",
                  "4-6 weeks implementation"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For organizations requiring full-scale automation",
                features: [
                  "Unlimited automated flows",
                  "Unlimited conversations",
                  "Custom integrations",
                  "Dedicated success manager",
                  "24/7 priority support",
                  "Custom implementation timeline"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-[hsl(142,71%,45%)] border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[hsl(142,71%,45%)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[hsl(142,71%,45%)]">{plan.price}</div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-[hsl(142,71%,45%)] mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,40%)] text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AMO AI */}
      <section className="section-padding bg-[hsl(0,0%,5%)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AMO AI?</h2>
            <p className="text-lg text-gray-300">We don't just build bots—we build revenue engines</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Implementation",
                description: "6-week average from kick-off to launch, not 6 months"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Design",
                description: "Every flow optimized with analytics and A/B testing"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and GDPR compliance built-in"
              },
              {
                icon: Users,
                title: "Human Handoff",
                description: "Seamless escalation when customers need real agents"
              },
              {
                icon: TrendingUp,
                title: "Continuous Optimization",
                description: "Monthly performance reviews and improvements"
              },
              {
                icon: DollarSign,
                title: "ROI Guarantee",
                description: "We track and prove the financial impact of every automation"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-[hsl(0,0%,11%)] border-[hsl(0,0%,18%)] text-white hover:border-[hsl(142,71%,45%)] transition-all">
                <CardHeader>
                  <benefit.icon className="text-[hsl(142,71%,45%)] mb-2" size={32} />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How long does it take to implement?",
                answer: "Most WhatsApp automation projects take 4-6 weeks from kickoff to launch. Simple flows can be live in 2-3 weeks, while complex multi-flow systems may take 8-10 weeks."
              },
              {
                question: "What's required to get started?",
                answer: "You'll need a WhatsApp Business API account (we can help you set this up), access to your existing systems for integration, and clarity on your customer communication workflows."
              },
              {
                question: "Can it integrate with our existing systems?",
                answer: "Yes! We integrate with most CRMs (Salesforce, HubSpot, etc.), e-commerce platforms (Shopify, WooCommerce), and custom APIs. If you have a system, we can likely connect it."
              },
              {
                question: "What happens when the bot can't answer?",
                answer: "Our systems include intelligent escalation to human agents. When the AI detects complex queries or customer frustration, it seamlessly transfers to your support team with full conversation context."
              },
              {
                question: "How do you measure success?",
                answer: "We track conversation completion rates, automation rates, response times, customer satisfaction scores, and most importantly—revenue impact and cost savings. Every metric ties back to business value."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use enterprise-grade encryption, comply with GDPR and data protection regulations, and never store sensitive customer data longer than necessary. Security audits available on request."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-[hsl(142,71%,45%)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
              Your Next Step: Transform WhatsApp Into Your #1 Revenue Channel
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 100+ businesses using WhatsApp automation to scale customer engagement and drive measurable ROI.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MessageCircle className="mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Book a Strategy Call</h3>
                <p className="text-sm text-white/80">30-min consultation to map your automation opportunities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <BarChart3 className="mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Get a Custom Proposal</h3>
                <p className="text-sm text-white/80">Tailored solution with ROI projections for your business</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Launch in 6 Weeks</h3>
                <p className="text-sm text-white/80">From kickoff to live automation serving your customers</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[hsl(142,71%,45%)] hover:bg-white/90">
                <Link to="/contact">Start Your WhatsApp Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/ai-brief">Complete AI Brief</Link>
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
