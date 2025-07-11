import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Users, BookOpen } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AgentsGrid } from "@/components/AgentsGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCaseWalkthrough } from "@/components/UseCaseWalkthrough";
import { WhyBrewra } from "@/components/WhyBrewra";
import { BrewraVenturesPromo } from "@/components/BrewraVenturesPromo";
import { CTASection } from "@/components/CTASection";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-semibold">Brewra.AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors">Agents</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#use-case" className="text-muted-foreground hover:text-foreground transition-colors">Use Case</a>
            <Button variant="outline" size="sm" asChild>
              <a href="https://calendly.com/brewra_ventures/discovery-call" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="mailto:team@brewra.com">
                Request Access
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <AgentsGrid />
      <HowItWorks />
      <UseCaseWalkthrough />
      <WhyBrewra />
      <BrewraVenturesPromo />
      <CTASection />

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">B</span>
                </div>
                <span className="text-xl font-semibold">Brewra.AI</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">Your GTM Dream Team  in the Cloud</p>
              <p className="text-muted-foreground text-xs">
                Developed and owned by <a href="https://lovable.dev/projects/17c863f0-1b99-47b4-b518-1cfeb4ca4df1" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground transition-colors">Brewra LLC</a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">© 2025 Brewra.AI. All rights reserved. Developed and owned by <a href="https://www.brewra.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Brewra LLC</a>.</div>
        </div>
      </footer>
    </div>;
};
export default Index;