import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, BookOpen, Search } from "lucide-react";
const services = [{
  icon: Rocket,
  title: "Startups & Scale-ups",
  description: "Fast-growing companies that need to scale their GTM operations without adding overhead or slowing down momentum."
}, {
  icon: Users,
  title: "Enterprise Teams",
  description: "Forward-thinking organizations looking to accelerate their go-to-market processes and stay ahead of the competition."
}, {
  icon: BookOpen,
  title: "GTM Consultancies",
  description: "Consulting firms helping clients with go-to-market strategy and execution who need powerful AI tools to deliver better results."
}, {
  icon: Search,
  title: "VC and PE Analysts",
  description: "Investment professionals conducting market research and due diligence who need comprehensive GTM intelligence and insights."
}];
export const BrewraVenturesPromo = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Teams That Move Fast
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">Brewra.AI is designed for ambitious teams who need to move fast and scale smart in today's competitive landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to accelerate your GTM operations?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:team@brewra.com">
              Request Access
            </a>
          </Button>
        </div>
      </div>
    </section>;
};