
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Log In",
    description: "Access your unified dashboard and connect your tools",
    details: "Simple onboarding with seamless integration to your existing CRM, marketing tools, and data sources."
  },
  {
    step: "02", 
    title: "Deploy Agents",
    description: "Select and configure AI agents for your specific needs",
    details: "Choose from 9 specialized agents, set parameters, and define your target market requirements."
  },
  {
    step: "03",
    title: "Get Results", 
    description: "Watch as your agents deliver actionable insights and outcomes",
    details: "Real-time progress tracking, automated reports, and continuous optimization of your GTM strategy."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your go-to-market approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="font-medium">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-background rounded-full p-2 shadow-sm border">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
