import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MessageCircle, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@amoai.co",
      href: "mailto:info@amoai.co",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 416-500-3053",
      href: "tel:+14165003053",
      description: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      value: "Chat with us on WhatsApp",
      href: "https://wa.me/14165003053",
      description: "Instant responses 24/7",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Get in Touch <span className="text-gradient">with Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out and let's build something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Get in touch through any of these channels. We're here to help bring your AI vision to life.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className={`p-6 space-y-3 card-hover ${method.cta ? "bg-success/5 border-success/20" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        method.cta ? "bg-success/10" : "bg-primary/10"
                      }`}>
                        <method.icon className={`h-6 w-6 ${method.cta ? "text-success" : "text-primary"}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    <a
                      href={method.href}
                      className={`block text-sm font-medium ${
                        method.cta ? "text-success hover:underline" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {method.value}
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Send us a Message</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company name (optional)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or how we can help..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-orange border-0">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-padding bg-secondary">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We'd love to meet you in person. Drop by our office for a consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 mx-auto text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">AMO AI Agency</h3>
                    <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Toronto, Ontario, Canada</p>
                    <p className="text-sm text-muted-foreground">
                      Interactive map integration available upon request. Contact us for our exact office location and meeting arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-orange">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-white/90">
              Let's discuss your vision and explore how AI can transform your business. Book a free consultation call with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90 border-0">
                <a href="#" className="flex items-center">
                  <Calendar className="mr-2" />
                  Book a Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/ai-brief">
                  Start Your Brief <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90 text-sm">
              <span>✓ Free 30-minute consultation</span>
              <span>✓ No commitment required</span>
              <span>✓ Expert AI guidance</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
