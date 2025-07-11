
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

const comparisons = [
  {
    feature: "Time to Market Entry",
    traditional: "6-12 months",
    brewra: "30-60 days",
    advantage: true
  },
  {
    feature: "Team Size Required",
    traditional: "8-15 specialists",
    brewra: "2-3 team members",
    advantage: true
  },
  {
    feature: "Upfront Investment",
    traditional: "$200K-500K",
    brewra: "$2K-5K/month",
    advantage: true
  },
  {
    feature: "Market Research Depth",
    traditional: "Limited scope",
    brewra: "Comprehensive analysis",
    advantage: true
  },
  {
    feature: "Consistency",
    traditional: "Variable quality",
    brewra: "Always optimized",
    advantage: true
  },
  {
    feature: "24/7 Operations",
    traditional: "Business hours only", 
    brewra: "Round-the-clock",
    advantage: true
  }
];

export const WhyBrewra = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Brewra.AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare traditional GTM approaches with our agentic intelligence platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div></div>
                <div>
                  <CardTitle className="text-lg">Traditional Approach</CardTitle>
                </div>
                <div>
                  <CardTitle className="text-lg text-primary">Brewra.AI</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisons.map((comparison, index) => (
                <div key={index} className={`grid grid-cols-3 gap-4 p-4 items-center ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                  <div className="font-medium">
                    {comparison.feature}
                  </div>
                  <div className="text-center text-muted-foreground flex items-center justify-center space-x-2">
                    <X className="h-4 w-4 text-red-500" />
                    <span>{comparison.traditional}</span>
                  </div>
                  <div className="text-center font-medium flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-primary">{comparison.brewra}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
