import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
const walkthrough = [{
  agent: "Scout",
  task: "Market Research",
  result: "Identified 847 potential B2B SaaS companies in the UK fintech sector",
  status: "completed"
}, {
  agent: "Profiler",
  task: "ICP Development",
  result: "Created detailed profiles for 3 primary customer segments with 89% match accuracy",
  status: "completed"
}, {
  agent: "Strategist",
  task: "GTM Strategy",
  result: "Developed 90-day market entry plan with channel partnerships and pricing strategy",
  status: "completed"
}, {
  agent: "Activator",
  task: "Campaign Launch",
  result: "Launched LinkedIn and email campaigns reaching 2,340 qualified prospects",
  status: "in-progress"
}, {
  agent: "Handler",
  task: "Objection Management",
  result: "Processed 147 objections with 73% conversion to next stage",
  status: "in-progress"
}];
export const UseCaseWalkthrough = () => {
  return <section id="use-case" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Use Case</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entering the UK Market
          </h2>
          <p className="text-xl text-muted-foreground">Watch how Brewra.AI helps a SaaS company successfully expand to the UK market in 90 days</p>
        </div>

        <div className="space-y-4">
          {walkthrough.map((item, index) => <Card key={index} className={`transition-all duration-300 ${item.status === 'completed' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${item.status === 'completed' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.agent}</CardTitle>
                      <CardDescription className="font-medium">
                        {item.task}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                      {item.status === 'completed' ? 'Completed' : 'In Progress'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {item.result}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border">
          <h3 className="font-semibold text-lg mb-2">Results After 90 Days</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">847</div>
              <div className="text-sm text-muted-foreground">Prospects Identified</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">23%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">Qualified Leads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Closed Deals</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};