import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Check, Search, Target, Zap, FileCode, BarChart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const techStacks = {
    "Frontend & Development": [
      { name: "Vite", desc: "Lightning-fast build tool for modern web apps" },
      { name: "React", desc: "Robust client framework for interactivity" },
      { name: "Tailwind", desc: "Utility-first CSS for rapid UI development" },
      { name: "TypeScript", desc: "Type-safe JavaScript for reliability" },
      { name: "Next.js", desc: "Production-grade React framework" },
    ],
    "AI & Orchestration": [
      { name: "CopilotKit", desc: "Conversational AI workflows" },
      { name: "CrewAI", desc: "Multi-agent orchestration" },
      { name: "Mistral", desc: "Open-source AI models" },
      { name: "Tiptap", desc: "Rich text editing & interfaces" },
      { name: "LangChain", desc: "AI-native developer tools integration" },
    ],
    "AI Intelligence & Automation": [
      { name: "OpenAI", desc: "GPT-powered AI integration" },
      { name: "Claude SDK", desc: "Advanced LLM assistant" },
      { name: "Cloudinary", desc: "Media management & optimization" },
      { name: "WhatsApp", desc: "Messaging & bot engagement" },
      { name: "n8n", desc: "Workflow automation engine" },
    ],
    "Data & Infrastructure": [
      { name: "Supabase", desc: "Database & authentication" },
      { name: "Clerk", desc: "Authentication & user logic" },
      { name: "Qopla", desc: "Data analytics platform" },
      { name: "GitHub", desc: "Version control & collaboration" },
      { name: "Vercel", desc: "Enterprise-grade deployment & hosting" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Turn Ideas Into{" "}
                <span className="text-gradient">AI-Powered</span>{" "}
                Applications in Weeks
              </h1>
              <p className="text-lg text-muted-foreground">
                We build intelligent systems with Claude, GPT-4, and AI Tools. From $15K MVPs to enterprise solutions, we deliver production-ready apps in 2–8 weeks.
              </p>
              <div className="inline-block bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-bold">293% average ROI in 3 months.</span> $4.3M in monthly client revenue already delivered.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gradient-orange border-0 text-base px-8">
                  <Link to="/ai-brief">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8">
                  <Link to="/projects">See 50+ Live Projects</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by companies worldwide • Built with enterprise-grade technologies
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl" />
                <div className="relative bg-card border-2 border-primary/20 rounded-full w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-4xl mb-4">▶️</div>
                  <div className="text-sm font-semibold text-primary mb-2">AI</div>
                  <div className="text-xs text-muted-foreground">DEVELOPMENT</div>
                  <div className="mt-8 text-sm text-muted-foreground">
                    Trusted by 50+ Companies Building the Future
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800" />
                    <div className="w-8 h-8 rounded-full bg-orange-500" />
                    <div className="w-8 h-8 rounded-full bg-gray-600" />
                    <ArrowRight className="w-4 h-4 text-muted-foreground mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Info Cards */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="p-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-orange-600">Our service</span>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Web Design", "UI/UX Design", "Development", "Motion Designer", "Adobe Illustration"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white dark:bg-gray-800 rounded-full border border-orange-200 dark:border-orange-800 text-orange-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">We help Our Clients to shine Online</h3>
                <p className="text-sm text-muted-foreground">
                  A wide range of printing services to meet your needs.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Our Platforms in Production</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold text-orange-600">FashionOS</div>
                    <div className="text-xs text-muted-foreground">Farm Management Platform</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600">I Love Medellin</div>
                    <div className="text-xs text-muted-foreground">Tourism/Automation</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600">Automotive Marketplace</div>
                    <div className="text-xs text-muted-foreground">Multi-Dealer Platform</div>
                  </div>
                </div>
                <Button size="sm" className="gradient-orange border-0 w-full">
                  See All Projects
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 space-y-6 bg-white dark:bg-card border hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <h3 className="text-2xl font-bold text-foreground">Intelligent Applications That Think</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                We build sophisticated AI systems using the latest models from OpenAI, Anthropic, and open-source alternatives.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Conversational AI & Chatbots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Multi-Agent Systems (CrewAI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>RAG Knowledge Bases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Document Processing</span>
                </li>
              </ul>
              <div className="pt-6 space-y-1">
                <div className="text-2xl font-bold text-orange-500">Starting at $30,000</div>
                <div className="text-sm text-muted-foreground">2-6 week delivery</div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 bg-white dark:bg-card border hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <h3 className="text-2xl font-bold text-foreground">From Concept to Launch in Days</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Skip months of development. We use AI-powered platforms to build production applications at unprecedented speed.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Lovable for instant apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Webflow for marketing sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Supabase for backends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>React for custom UIs</span>
                </li>
              </ul>
              <div className="pt-6 space-y-1">
                <div className="text-2xl font-bold text-orange-500">Starting at $15,000</div>
                <div className="text-sm text-muted-foreground">1-4 week delivery</div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 bg-white dark:bg-card border hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              <h3 className="text-2xl font-bold text-foreground">Automate Everything That Repeats</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Connect your tools, eliminate manual work, and let intelligent workflows run your operations 24/7.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Customer service (WhatsApp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Data processing (n8n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Payment workflows (Stripe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Email sequences</span>
                </li>
              </ul>
              <div className="pt-6 space-y-1">
                <div className="text-2xl font-bold text-orange-500">Starting at $10,000</div>
                <div className="text-sm text-muted-foreground">1-2 week delivery</div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* Technology Stack */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <div className="text-sm text-orange-500 font-medium">Technology Stack</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              We Build With <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Cutting-edge technologies and proven frameworks that power AMO AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStacks).map(([category, items]) => (
              <Card key={category} className="p-6 bg-gray-900 border-gray-800 space-y-4">
                <h3 className="text-lg font-bold text-orange-500 border-b border-orange-500/30 pb-2">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-white/60">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center pt-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient">20+</div>
              <div className="text-white/70 mt-2">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient">99.9%</div>
              <div className="text-white/70 mt-2">Uptime Guaranteed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient">24/7</div>
              <div className="text-white/70 mt-2">Monitoring & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-background">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-950/30 border border-orange-300 dark:border-orange-800 rounded-full text-sm font-medium text-orange-600">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">8 Weeks.</span> Not 8 Months.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              While others take 6+ months to deliver, we launch complete AI applications in just 8 weeks. Our proven process eliminates delays, reduces scope creep, and gets you to market faster than you thought possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 via-blue-500 to-green-500 opacity-20" />
            
            {[
              {
                week: "Week 1-2",
                title: "Design Sprint",
                icon: Search,
                color: "bg-orange-500",
                phase: "Discovery & Wireframing",
                details: "Deep discovery sessions, user journey mapping, wireframing, and visual design.",
                deliverable: "Complete wireframes & clickable prototype"
              },
              {
                week: "Week 3-5",
                title: "Rapid Build",
                icon: FileCode,
                color: "bg-purple-500",
                phase: "Core Development",
                details: "Database design, AI model integration, frontend development in parallel streams.",
                deliverable: "Fully-functional application build"
              },
              {
                week: "Week 6-7",
                title: "Integration & Testing",
                icon: Zap,
                color: "bg-blue-500",
                phase: "Quality Assurance",
                details: "Third-party integrations, comprehensive testing, performance optimization.",
                deliverable: "Production-ready application"
              },
              {
                week: "Week 8",
                title: "Launch & Scale",
                icon: Target,
                color: "bg-green-500",
                phase: "Go Live",
                details: "Production deployment, monitoring setup, user training and scaling preparation.",
                deliverable: "Live application with HA support"
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto rounded-full ${step.color} flex items-center justify-center relative z-10`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{step.week}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="text-sm font-semibold text-primary">{step.phase}</div>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                    <div className="pt-2 text-xs text-muted-foreground italic">{step.deliverable}</div>
                  </div>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-8 text-muted-foreground/30 w-8 h-8" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8 border-t">
            <h3 className="text-2xl font-bold">Results You Can Expect</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven outcomes from our streamlined process
            </p>
          </div>
        </div>
      </section>

      {/* Investment Levels */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Investment Levels</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Investment levels designed for ROI. Every project pays for itself within 3 months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 space-y-6 bg-white dark:bg-white text-gray-900 rounded-3xl">
              <div>
                <h3 className="text-xl font-bold mb-3">MVP / Proof of Concept</h3>
                <div className="text-4xl font-bold mb-2">$15K–$30K</div>
                <p className="text-sm text-gray-600">Perfect for validating your AI idea with a working prototype</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Core AI functionality",
                  "Basic user interface",
                  "Essential integrations",
                  "2–4 week delivery",
                  "User testing & feedback",
                  "Technical documentation"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Start MVP →
              </Button>
            </Card>

            <Card className="p-10 space-y-6 bg-white dark:bg-white text-gray-900 rounded-3xl relative border-4 border-orange-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Production Ready</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">$50K–$150K</div>
                <p className="text-sm text-gray-600">Full-featured AI application ready for market launch</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Complete AI platform",
                  "Advanced integrations",
                  "Scalable architecture",
                  "4–8 week delivery",
                  "ROI tracking & analytics",
                  "3 months support",
                  "Performance optimization"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0">
                Most Popular →
              </Button>
            </Card>

            <Card className="p-10 space-y-6 bg-white dark:bg-white text-gray-900 rounded-3xl">
              <div>
                <h3 className="text-xl font-bold mb-3">Enterprise</h3>
                <div className="text-4xl font-bold mb-2">$200K+</div>
                <p className="text-sm text-gray-600">Comprehensive AI transformation with dedicated team</p>
              </div>
              <ul className="space-y-3">
                {[
                  "AI agents + RAG knowledge base",
                  "Custom workflow automation",
                  "Enterprise integrations",
                  "Dedicated project team",
                  "Advanced security & compliance",
                  "1 year support & maintenance",
                  "Team training included"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Contact Us →
              </Button>
            </Card>
          </div>

          <div className="text-center pt-6">
            <p className="text-white/80 text-sm mb-4">
              All plans include strategy consultation, implementation, and post-launch support.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
              <BarChart className="w-5 h-5 text-orange-500" />
              <span className="text-sm">Want to calculate your ROI?</span>
              <Link to="/ai-brief" className="text-orange-500 font-medium hover:underline">
                Use our ROI Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Discovery */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="text-sm text-orange-600 font-medium">AI-Powered Discovery</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Create Your Project Brief in Minutes
              </h2>
              <p className="text-lg text-muted-foreground">
                Our AI-powered system guides you through a simple discovery process to understand your goals and deliver a tailored solution. No jargon, no endless calls — just clear results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Save Time</div>
                    <div className="text-sm text-muted-foreground">30 min to completion vs 2-3 hrs traditional calls</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Smarter Scoping</div>
                    <div className="text-sm text-muted-foreground">AI asks the right questions, and isn't mark overly.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Higher ROI</div>
                    <div className="text-sm text-muted-foreground">Projects aligned with your business goals from day one.</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="gradient-orange border-0" asChild>
                <Link to="/ai-brief">
                  Start My AI Project Brief →
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30 rounded-3xl p-8 border-2 border-purple-200 dark:border-purple-800">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-500 flex-shrink-0" />
                      <div className="w-12 h-12 rounded-lg bg-purple-500 flex-shrink-0" />
                      <div className="w-12 h-12 rounded-lg bg-pink-500 flex-shrink-0" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg" />
                      <div className="h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">30min</div>
                    <div className="text-xs text-muted-foreground mt-1">Average completion time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">98%</div>
                    <div className="text-xs text-muted-foreground mt-1">Project success rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-sm text-orange-500 font-medium">Ready to Transform?</div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Build <span className="text-gradient">Something Extraordinary?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join the companies already transforming their business with AI. From idea to production in 2–8 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0 text-lg px-8">
                <Link to="/ai-brief">
                  Start Your AI Brief <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/70 text-sm pt-4">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Free 30-min strategy call
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> No commitment required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Expert AI guidance
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
