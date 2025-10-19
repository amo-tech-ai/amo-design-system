import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Zap, TrendingUp, Users, Award, CheckCircle2, ArrowRight, Building2, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              ABOUT AMO AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Help Businesses Launch <span className="text-gradient">AI-Powered Applications</span> in Weeks, Not Months
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission is to democratize AI technology by making it accessible, practical, and profitable for businesses of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gradient-orange border-0">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Live AI Apps</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">2-4</div>
                <div className="text-sm text-muted-foreground">Week Delivery</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">293%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Production Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with AI solutions that are production-ready, cost-effective, and deliver measurable results in weeks, not months.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
                <p className="text-muted-foreground">
                  To become the world's leading platform for rapid AI application development, making enterprise-grade AI accessible to every business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Values</h3>
                <p className="text-muted-foreground">
                  Speed, transparency, and quality. We believe in delivering production-ready solutions fast without compromising on excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose AMO AI */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose AMO AI?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine speed, quality, and AI expertise to deliver live AI applications that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 space-y-3">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Lightning-Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Go from concept to production in 2-4 weeks. No lengthy development cycles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 space-y-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Cutting-Edge AI Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Latest AI models and frameworks integrated seamlessly into your business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 space-y-3">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">
                  50+ live AI applications serving thousands of users daily.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 space-y-3">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  SOC-compliant applications with enterprise-grade security built-in.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card border-2">
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Live AI Applications</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border-2">
              <div className="text-5xl font-bold text-gradient mb-2">80%</div>
              <div className="text-muted-foreground">Market Rate Savings</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border-2">
              <div className="text-5xl font-bold text-gradient mb-2">3</div>
              <div className="text-muted-foreground">Free Revisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 8-Week Process */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our 8-Week Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that takes you from idea to live AI application in just 8 weeks.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Discovery & Planning */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                1
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  We dive deep into your business goals, AI needs, and technical requirements through detailed workshops and analysis.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>AI Requirements Workshop</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Technical Scope Definition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Architecture & Design */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">AI Architecture & Design</h3>
                <p className="text-muted-foreground">
                  We architect your AI solution using best practices and create intuitive designs for optimal user experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>AI System Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>UI/UX Wireframes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                3
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Development</h3>
                <p className="text-muted-foreground">
                  Our team builds your AI application using cutting-edge technologies and AI frameworks, with weekly progress updates.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>AI Model Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Weekly Demos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing & Optimization */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                4
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Testing & Optimization</h3>
                <p className="text-muted-foreground">
                  Rigorous testing and AI model optimization ensure your application performs flawlessly in production.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>AI Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Performance Testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch & Support */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                5
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Launch & Support</h3>
                <p className="text-muted-foreground">
                  We deploy your AI application to production and provide ongoing support to ensure continuous success.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Production Deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>30-Day Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your 8-Week Journey?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your AI vision and create a custom roadmap to bring it to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gradient-orange border-0">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/ai-brief">Submit AI Brief</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by 50+ Companies</h2>
            <p className="text-xl text-muted-foreground">
              From startups to enterprises, we help businesses launch AI-powered solutions fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "AMO AI delivered our WhatsApp automation platform in just 3 weeks. Game-changing results."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Inc</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "The 8-week timeline was perfect. We launched on schedule and saw immediate ROI."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">CTO, Enterprise Solutions</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">293%</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Our AI chatbot reduced support costs by 60% in the first month. Incredible value."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">Emily Watson</div>
                  <div className="text-sm text-muted-foreground">VP Operations, RetailCo</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Build Your AI-Powered Future?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 50+ companies that have transformed their business with our rapid AI development process.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <Building2 className="w-10 h-10 text-primary mx-auto" />
                  <h3 className="font-bold">Book a Call</h3>
                  <p className="text-sm text-muted-foreground">Schedule a free consultation</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Schedule Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
                  <h3 className="font-bold">View Process</h3>
                  <p className="text-sm text-muted-foreground">Learn about our 8-week method</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/process">See Process <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <Award className="w-10 h-10 text-primary mx-auto" />
                  <h3 className="font-bold">Submit AI Brief</h3>
                  <p className="text-sm text-muted-foreground">Get a custom project quote</p>
                  <Button asChild className="w-full gradient-orange border-0">
                    <Link to="/ai-brief">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
