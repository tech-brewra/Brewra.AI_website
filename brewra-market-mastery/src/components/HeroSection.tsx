import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  return <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
            Your GTM Dream Team — in the Cloud
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Scale Faster with{" "}
          <span className="text-primary">Agentic GTM</span>{" "}
          Intelligence
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Autonomous AI agents that handle your complete go-to-market lifecycle. From market research to contract closing. Move faster without the overhead.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="mailto:team@brewra.com">
              Request Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8" asChild>
            <a href="https://calendly.com/brewra_ventures/discovery-call" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
        <div className="mt-12 relative">
          <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl p-8 backdrop-blur-sm border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">9</div>
                <div className="text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10x</div>
                <div className="text-sm text-muted-foreground">Faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};