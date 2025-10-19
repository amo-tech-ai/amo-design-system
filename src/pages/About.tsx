import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Zap, TrendingUp, Users, Award, CheckCircle2, ArrowRight, Building2, Star, Sparkles, Clock, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="max-w-[760px] mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF6A00]/20 to-[#F6C9A8]/10 rounded-full text-sm font-medium text-[#FF6A00] border border-[#FF6A00]/20">
              ABOUT AMO AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#EDEDED]">
              We Help Businesses Launch <span className="bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent">AI-Powered Applications</span> in Weeks, Not Months
            </h1>
            <p className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed max-w-[680px] mx-auto">
              Our mission is to democratize AI technology by making it accessible, practical, and profitable for businesses of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#FF6A00] hover:bg-[#ff7a1d] text-black font-semibold border-0 h-12 px-8">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/14 hover:border-white/24 text-white h-12 px-8 bg-transparent">
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
            
            {/* Metric Chips */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="px-5 py-3 bg-[#161616] rounded-full border border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Live AI Apps</div>
              </div>
              <div className="px-5 py-3 bg-[#161616] rounded-full border border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                <div className="text-2xl font-bold text-white">2-8</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Week Delivery</div>
              </div>
              <div className="px-5 py-3 bg-[#161616] rounded-full border border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                <div className="text-2xl font-bold text-white">293%</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Average ROI</div>
              </div>
              <div className="px-5 py-3 bg-[#161616] rounded-full border border-white/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Production Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">Our Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-[980px] mx-auto">
            <Card className="bg-[#161616] border-l-4 border-l-[#FF6A00] border-t border-r border-b border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Target className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <h3 className="text-xl font-bold text-[#EDEDED]">Mission</h3>
                <p className="text-[#A3A3A3] text-[15px] leading-[26px]">
                  To empower businesses with AI solutions that are production-ready, cost-effective, and deliver measurable results in weeks, not months.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border-l-4 border-l-[#FF6A00] border-t border-r border-b border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Eye className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <h3 className="text-xl font-bold text-[#EDEDED]">Vision</h3>
                <p className="text-[#A3A3A3] text-[15px] leading-[26px]">
                  To become the world's leading platform for rapid AI application development, making enterprise-grade AI accessible to every business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border-l-4 border-l-[#FF6A00] border-t border-r border-b border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Heart className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <h3 className="text-xl font-bold text-[#EDEDED]">Values</h3>
                <p className="text-[#A3A3A3] text-[15px] leading-[26px]">
                  Speed, transparency, and quality. We believe in delivering production-ready solutions fast without compromising on excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose AMO AI */}
      <section className="py-20 md:py-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">Why Choose AMO AI?</h2>
            <p className="text-lg text-[#A3A3A3] max-w-3xl mx-auto">
              We combine speed, quality, and AI expertise to deliver live AI applications that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Zap className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#EDEDED]">Lightning-Fast Delivery</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Go from concept to production in 2-4 weeks. No lengthy development cycles.
                </p>
                <p className="text-xs text-[#FF6A00] font-medium">8× faster than traditional dev</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <TrendingUp className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#EDEDED]">Cutting-Edge AI Expertise</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Latest AI models and frameworks integrated seamlessly into your business.
                </p>
                <p className="text-xs text-[#FF6A00] font-medium">GPT-4, Claude, Custom Models</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Users className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#EDEDED]">Proven Track Record</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  50+ live AI applications serving thousands of users daily.
                </p>
                <p className="text-xs text-[#FF6A00] font-medium">293% average ROI</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center border border-[#FF6A00]/30">
                  <Award className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#EDEDED]">Enterprise Security</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  SOC-compliant applications with enterprise-grade security built-in.
                </p>
                <p className="text-xs text-[#FF6A00] font-medium">Bank-level encryption</p>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Strip */}
          <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] max-w-5xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-[#A3A3A3]">Live AI Applications</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">90%</div>
                  <div className="text-[#A3A3A3]">Process Automation</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">3</div>
                  <div className="text-[#A3A3A3]">Month ROI</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our 8-Week Process - Vertical Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E0E0E] mb-4">Our 8-Week Process</h2>
            <p className="text-lg text-[#555555] max-w-3xl mx-auto">
              A proven methodology that takes you from idea to live AI application in just 8 weeks.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Timeline Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6A00]/20 via-[#FF6A00]/40 to-[#FF6A00]/20 hidden md:block" />
            
            <div className="space-y-12">
              {/* Week 1 - Left */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all md:ml-auto">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg">1</div>
                      <h3 className="text-2xl font-bold text-[#0E0E0E]">Discovery & Planning</h3>
                    </div>
                    <p className="text-[#555555]">
                      We dive deep into your business goals, AI needs, and technical requirements through detailed workshops and analysis.
                    </p>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-2">Key Deliverables:</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>AI Requirements Workshop</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>Technical Scope Definition</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden md:block" />
              </div>

              {/* Week 2 - Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />
                <Card className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg">2</div>
                      <h3 className="text-2xl font-bold text-[#0E0E0E]">AI Architecture & Design</h3>
                    </div>
                    <p className="text-[#555555]">
                      We architect your AI solution using best practices and create intuitive designs for optimal user experience.
                    </p>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-2">Key Deliverables:</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>AI System Design</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>UI/UX Wireframes</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Week 3-6 - Left */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all md:ml-auto">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg">3</div>
                      <h3 className="text-2xl font-bold text-[#0E0E0E]">Development</h3>
                    </div>
                    <p className="text-[#555555]">
                      Our team builds your AI application using cutting-edge technologies and AI frameworks, with weekly progress updates.
                    </p>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-2">Key Deliverables:</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>AI Model Integration</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>Weekly Demos</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden md:block" />
              </div>

              {/* Week 7 - Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />
                <Card className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg">4</div>
                      <h3 className="text-2xl font-bold text-[#0E0E0E]">Testing & Optimization</h3>
                    </div>
                    <p className="text-[#555555]">
                      Rigorous testing and AI model optimization ensure your application performs flawlessly in production.
                    </p>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-2">Key Deliverables:</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>AI Performance Evaluation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>Load Testing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Week 8 - Left */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all md:ml-auto">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg">5</div>
                      <h3 className="text-2xl font-bold text-[#0E0E0E]">Launch & Support</h3>
                    </div>
                    <p className="text-[#555555]">
                      We deploy your AI application to production and provide ongoing support to ensure continuous success.
                    </p>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-2">Key Deliverables:</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>Production Deployment</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#555555]">
                          <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                          <span>30-Day Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA Section */}
      <section className="py-20 md:py-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <Card className="bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#141414] border border-white/[0.08] rounded-3xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] overflow-hidden">
            <CardContent className="p-12 text-center space-y-8 relative">
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">Ready to Start Your 8-Week Journey?</h2>
                <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-8">
                  Let's discuss your AI vision and create a custom roadmap to bring it to life.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Button asChild size="lg" className="bg-[#FF6A00] hover:bg-[#ff7a1d] text-black font-semibold border-0 h-12 px-8">
                    <Link to="/contact">Schedule a Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/14 hover:border-white/24 text-white h-12 px-8 bg-transparent">
                    <Link to="/ai-brief">Submit AI Brief</Link>
                  </Button>
                </div>
                
                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-[#A3A3A3] pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                    <span>Fixed Timeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                    <span>Transparent Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                    <span>Proven ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00C36A]" />
                    <span>30-Day Support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials - Trusted By */}
      <section className="py-20 md:py-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">Trusted by 50+ Companies</h2>
            <p className="text-lg text-[#A3A3A3]">
              From startups to enterprises, we help businesses launch AI-powered solutions fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-sm text-[#A3A3A3]">Client Satisfaction</div>
                </div>
                <p className="text-sm text-[#A3A3A3] italic leading-relaxed">
                  "AMO AI delivered our WhatsApp automation platform in just 3 weeks. Game-changing results."
                </p>
                <div className="text-xs text-[#FF6A00] font-medium">85% faster response time</div>
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="font-semibold text-[#EDEDED]">Sarah Chen</div>
                  <div className="text-sm text-[#A3A3A3]">CEO, TechStart Inc</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-[#A3A3A3]">On-Time Delivery</div>
                </div>
                <p className="text-sm text-[#A3A3A3] italic leading-relaxed">
                  "The 8-week timeline was perfect. We launched on schedule and saw immediate ROI."
                </p>
                <div className="text-xs text-[#FF6A00] font-medium">3-week delivery time</div>
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="font-semibold text-[#EDEDED]">Michael Rodriguez</div>
                  <div className="text-sm text-[#A3A3A3]">CTO, Enterprise Solutions</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent">293%</div>
                  <div className="text-sm text-[#A3A3A3]">Average ROI</div>
                </div>
                <p className="text-sm text-[#A3A3A3] italic leading-relaxed">
                  "Our AI chatbot reduced support costs by 60% in the first month. Incredible value."
                </p>
                <div className="text-xs text-[#FF6A00] font-medium">60% cost reduction</div>
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="font-semibold text-[#EDEDED]">Emily Watson</div>
                  <div className="text-sm text-[#A3A3A3]">VP Operations, RetailCo</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Strip Below Testimonials */}
          <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] max-w-5xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-[#A3A3A3]">Live Apps</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">4.9/5</div>
                  <div className="text-[#A3A3A3]">Client Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-[#A3A3A3]">On-Time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#F6C9A8] bg-clip-text text-transparent mb-2">293%</div>
                  <div className="text-[#A3A3A3]">Avg ROI</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Action Tiles */}
      <section className="py-20 md:py-28 bg-[#0E0E0E]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED]">Ready to Build Your AI-Powered Future?</h2>
            <p className="text-lg text-[#A3A3A3] max-w-3xl mx-auto">
              Join 50+ companies that have transformed their business with our rapid AI development process.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mx-auto border border-[#FF6A00]/30">
                    <Building2 className="w-7 h-7 text-[#FF6A00]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#EDEDED]">Book a Call</h3>
                  <p className="text-sm text-[#A3A3A3]">Schedule a free consultation</p>
                  <Button asChild variant="outline" className="w-full border-white/14 hover:border-white/24 text-white bg-transparent">
                    <Link to="/contact">Schedule Free Call <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mx-auto border border-[#FF6A00]/30">
                    <CheckCircle2 className="w-7 h-7 text-[#FF6A00]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#EDEDED]">View Process</h3>
                  <p className="text-sm text-[#A3A3A3]">Learn about our 8-week method</p>
                  <Button asChild variant="outline" className="w-full border-white/14 hover:border-white/24 text-white bg-transparent">
                    <Link to="/process">See Process <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-[#161616] border border-white/[0.08] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:border-white/[0.12] hover:transform hover:scale-105 transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mx-auto border border-[#FF6A00]/30">
                    <Award className="w-7 h-7 text-[#FF6A00]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#EDEDED]">Submit AI Brief</h3>
                  <p className="text-sm text-[#A3A3A3]">Get a custom project quote</p>
                  <Button asChild className="w-full bg-[#FF6A00] hover:bg-[#ff7a1d] text-black font-semibold border-0">
                    <Link to="/ai-brief">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 bg-gradient-to-br from-[#FF6A00] via-[#ff7a1d] to-[#F6C9A8]">
        <div className="container max-w-[1180px] mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Let's Start Your 8-Week AI Transformation</h2>
            
            {/* Checkmarks */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-black/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Fixed timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Transparent pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Proven ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">30-day support</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white font-semibold border-0 h-12 px-8">
                <Link to="/ai-brief">Start Your Project Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-black/20 hover:border-black/30 hover:bg-white/10 text-black h-12 px-8 bg-transparent font-semibold">
                <Link to="/projects">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
