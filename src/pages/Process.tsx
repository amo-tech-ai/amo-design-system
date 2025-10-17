import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, Clock, Zap, Shield, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  const phases = [
    {
      number: "1",
      title: "Design Sprint",
      duration: "1 Week",
      icon: Clock,
      color: "bg-blue-500",
      activities: [
        "Requirements gathering and stakeholder interviews",
        "User journey mapping and persona development",
        "Technical architecture planning",
        "Wireframing and UX design",
        "AI model selection and strategy",
      ],
      deliverable: "Complete project specification and design mockups",
    },
    {
      number: "2",
      title: "Build",
      duration: "4 Weeks",
      icon: Zap,
      color: "bg-primary",
      activities: [
        "Frontend development with React/Next.js",
        "Backend API development",
        "AI model training and integration",
        "Database setup and optimization",
        "Third-party integrations (Stripe, CRM, etc.)",
      ],
      deliverable: "Fully functional MVP ready for testing",
    },
    {
      number: "3",
      title: "Test",
      duration: "1 Week",
      icon: Shield,
      color: "bg-green-500",
      activities: [
        "Comprehensive QA testing",
        "Load and performance testing",
        "Security audits and penetration testing",
        "User acceptance testing (UAT)",
        "Bug fixes and optimizations",
      ],
      deliverable: "Production-ready, battle-tested application",
    },
    {
      number: "4",
      title: "Launch & Scale",
      duration: "2 Weeks",
      icon: TrendingUp,
      color: "bg-purple-500",
      activities: [
        "Production deployment setup",
        "Monitoring and analytics integration",
        "Team training and documentation",
        "Gradual rollout and A/B testing",
        "Performance optimization based on real data",
      ],
      deliverable: "Live application with ongoing support",
    },
  ];

  const comparison = [
    {
      aspect: "Project Duration",
      traditional: "6-12 months",
      amo: "8 weeks",
    },
    {
      aspect: "Upfront Requirements",
      traditional: "Months of planning",
      amo: "1-week sprint",
    },
    {
      aspect: "Feedback Loops",
      traditional: "Monthly reviews",
      amo: "Weekly iterations",
    },
    {
      aspect: "Time to Market",
      traditional: "9+ months",
      amo: "2 months",
    },
    {
      aspect: "Cost Efficiency",
      traditional: "$100K-$500K",
      amo: "$20K-$60K",
    },
    {
      aspect: "Risk Level",
      traditional: "High (long commitments)",
      amo: "Low (fast validation)",
    },
  ];

  const trackRecord = [
    { metric: "2X", label: "Faster than industry average" },
    { metric: "0.7", label: "Defects per 1,000 lines of code" },
    { metric: "98%", label: "On-time delivery rate" },
    { metric: "24", label: "Projects launched on schedule" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding gradient-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              <span className="text-gradient">8 Weeks.</span>
              <br />
              Not 8 Months.
            </h1>
            <p className="text-xl text-gray-300">
              Our proven 4-phase process delivers production-ready AI applications fast—without sacrificing quality or reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-orange border-0">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="#calculator">Calculate Timeline</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              30-minute consultation • No commitment • Free project roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="text-gradient">8-Week</span> Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to production in just 8 weeks
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />

            {phases.map((phase, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 mb-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content Card */}
                <Card className={`p-8 space-y-4 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto lg:col-start-2"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                      <p className="text-primary font-medium">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-semibold text-sm">Deliverable:</p>
                    <p className="text-sm text-muted-foreground mt-1">{phase.deliverable}</p>
                  </div>
                </Card>

                {/* Icon Placeholder */}
                <div className={`hidden lg:flex items-center justify-center ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
                    <phase.icon className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why <span className="text-gradient">8 Weeks</span> Beats 6 Months
            </h2>
            <p className="text-xl text-muted-foreground">
              Traditional agencies vs. AMO AI approach
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-card rounded-lg font-semibold">
                <div>Aspect</div>
                <div className="text-center">Traditional</div>
                <div className="text-center text-primary">8-Week Process</div>
              </div>

              {/* Rows */}
              {comparison.map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 bg-card rounded-lg items-center">
                  <div className="font-medium">{row.aspect}</div>
                  <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                    <X className="h-4 w-4 text-destructive" />
                    {row.traditional}
                  </div>
                  <div className="text-center text-primary font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    {row.amo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl font-semibold mb-4">Bottom Line</p>
            <p className="text-3xl font-bold text-gradient">Save $200K+ and launch 6 months faster</p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding gradient-dark">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Proven <span className="text-gradient">Track Record</span>
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that matter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {trackRecord.map((stat, index) => (
              <Card key={index} className="p-6 text-center space-y-2 bg-white/5 border-white/10">
                <div className="text-5xl font-bold text-white">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-8 bg-white/5 border-white/10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Quality Metrics Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Code Coverage", value: "89%" },
                    { label: "Performance Score", value: "95/100" },
                    { label: "Accessibility Score", value: "98/100" },
                    { label: "Security Rating", value: "A+" },
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className="text-xl font-bold text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Calculator */}
      <section id="calculator" className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Calculate Your <span className="text-gradient">Project Timeline</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { name: "Simple MVP", weeks: "4-6 weeks", description: "Basic AI chatbot or automation" },
              { name: "Standard App", weeks: "6-8 weeks", description: "Full-featured platform with AI" },
              { name: "Complex System", weeks: "8-12 weeks", description: "Multi-agent AI + integrations" },
              { name: "Enterprise", weeks: "12+ weeks", description: "Large-scale custom solution" },
            ].map((tier, index) => (
              <Card key={index} className="p-6 space-y-4 text-center card-hover">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="text-3xl font-bold text-gradient">{tier.weeks}</div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </Card>
            ))}
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
              Stop waiting months for results. Our proven process gets you to market in just 8 weeks with production-ready AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90 border-0">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/ai-brief">
                  Start Your Brief <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90 text-sm">
              <span>✓ Free project roadmap</span>
              <span>✓ Timeline estimate</span>
              <span>✓ Budget breakdown</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
