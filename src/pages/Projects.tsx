import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = [
    {
      name: "FashionOS",
      category: "E-commerce Platform",
      tagline: "AI-Powered Fashion Marketplace",
      badge: "E-commerce",
      challenge: "A fashion startup needed a full e-commerce platform with AI-driven product recommendations and inventory management in 8 weeks.",
      solution: "We deployed a complete marketplace with AI recommendations, payment processing, and CRM integration using Supabase, Stripe, and custom ML models.",
      results: [
        { metric: "97%", label: "User Satisfaction" },
        { metric: "+65K", label: "Monthly Users" },
        { metric: "300%", label: "Conversion Increase" },
      ],
      technologies: ["React", "Supabase", "Stripe", "OpenAI"],
      quote: "AMO AI transformed our vision into reality. The AI recommendations increased our average order value by 40%.",
      author: "Sarah Chen, Founder",
    },
    {
      name: "AutoMax AI",
      category: "Automotive SaaS",
      tagline: "$4.2M Monthly Revenue With Automation",
      badge: "SaaS",
      challenge: "Manual car lead processing was costing $50K/month and losing potential customers to competitors due to slow response times.",
      solution: "Developed multi-agent AI system to qualify leads, schedule test drives, and automate follow-ups via WhatsApp and email.",
      results: [
        { metric: "$4.2M", label: "Monthly Revenue" },
        { metric: "90%", label: "Automation Rate" },
        { metric: "-85%", label: "Processing Time" },
      ],
      technologies: ["FastAPI", "CrewAI", "WhatsApp API", "HubSpot"],
      quote: "This AI assistant freed up our sales team to focus on closing deals. ROI was 7× in the first quarter.",
      author: "Michael Rodriguez, CEO",
    },
    {
      name: "I Love Medellin",
      category: "Tourism Platform",
      tagline: "Website Translation Platform",
      badge: "Tourism",
      challenge: "A tourism company needed to manage 1,000+ hotel listings with real-time translation to 8 languages.",
      solution: "Created AI-powered booking platform with automated multi-language support and dynamic pricing engine.",
      results: [
        { metric: "+98%", label: "International Bookings" },
        { metric: "8", label: "Languages" },
        { metric: "97.5%", label: "Translation Accuracy" },
      ],
      technologies: ["Next.js", "Supabase", "Google AI", "Stripe"],
      quote: "The platform expanded our market reach by 400%. AI translation quality rivals human translators.",
      author: "Carlos Martinez, Director",
    },
  ];

  const techStack = {
    "Frontend & Development": [
      "Vite",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    "AI & Orchestration": [
      "CrewAI",
      "LangChain",
      "Anthropic",
      "OpenAI",
      "CopilotKit",
    ],
    "AI Intelligence & Assist": [
      "Cursor",
      "Perplexity",
      "ChatGPT",
      "Claude",
    ],
    "Data & Infrastructure": [
      "Supabase",
      "PostgreSQL",
      "Firebase",
      "Stripe",
    ],
  };

  const stats = [
    { value: "20+", label: "Technical Platforms Mastered" },
    { value: "98.8%", label: "Avg AI Accuracy" },
    { value: "24/7", label: "Support & Uptime" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding gradient-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              We Move At YOUR Speed
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Our AI <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover how we've transformed businesses with AI applications delivered in 8 weeks. Real projects. Real results. Real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/process">View Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real AI applications we've delivered to brand-new or local businesses in just 8 weeks
            </p>
          </div>

          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.badge}
                  </span>
                  <h3 className="text-4xl font-bold">{project.name}</h3>
                  <p className="text-xl text-primary font-medium">{project.tagline}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result, rIndex) => (
                    <div key={rIndex} className="text-center p-4 bg-secondary rounded-xl">
                      <div className="text-2xl font-bold text-gradient">{result.metric}</div>
                      <div className="text-sm text-muted-foreground mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Tech Stack:</span>
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button asChild className="gradient-orange border-0">
                  <Link to="/contact">
                    Start Similar Project <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>

              <Card className="p-8 space-y-6 bg-card">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="h-16 w-16 text-muted-foreground" />
                </div>
                <blockquote className="space-y-4">
                  <p className="text-lg italic">"{project.quote}"</p>
                  <footer className="text-sm text-muted-foreground">
                    — {project.author}
                  </footer>
                </blockquote>
                <Button variant="outline" className="w-full">Read Full Case Study</Button>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding gradient-dark">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              We Build With <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-xl text-gray-300">
              Over 20 cutting-edge AI tools and proven technologies to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, tools]) => (
              <Card key={category} className="p-6 space-y-4 bg-white/5 border-white/10">
                <h3 className="font-semibold text-white">{category}</h3>
                <ul className="space-y-2">
                  {tools.map((tool) => (
                    <li key={tool} className="text-sm text-gray-300">
                      {tool}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-orange">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              ARE WE A FIT FOR EACH OTHER?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90">
              Transform your business with AI applications delivered in just 8 weeks. Join the companies already achieving 3× ROI with our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90 border-0">
                <Link to="/contact">Start Your Project Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/process">View Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
