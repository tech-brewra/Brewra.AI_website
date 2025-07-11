import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const handleEarlyAccess = () => {
    const subject = "Early Access Request";
    const body = `Email: ${email}\nCompany: ${company}\n\nI would like to request early access to Brewra.AI.`;
    const mailtoLink = `mailto:team@brewra.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your GTM?
          </h2>
          <p className="text-xl text-muted-foreground">Join forward-thinking B2B companies already using Brewra.AI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <ArrowRight className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Request Early Access</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Be among the first to experience agentic GTM intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
              <Input placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
              <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={handleEarlyAccess}>
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-primary-foreground/60 text-center">
                Join 500+ companies on the waitlist
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Book a Demo</CardTitle>
              <CardDescription>
                See Brewra.AI in action with a personalized walkthrough
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Live agent demonstration
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Custom use case walkthrough
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  ROI calculation for your business
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Implementation roadmap
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://calendly.com/brewra_ventures/discovery-call" target="_blank" rel="noopener noreferrer">
                  Schedule Demo
                  <Calendar className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                30-minute personalized session
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};