import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Target, BookOpen, Megaphone, Monitor, MessageSquare, FileText, Handshake } from "lucide-react";
import { ProfilerModal } from "./ProfilerModal";
import { ScoutModal } from "./ScoutModal";
import { StrategistModal } from "./StrategistModal";
import { ActivatorModal } from "./ActivatorModal";
import { PresenterModal } from "./PresenterModal";

const agents = [
  {
    name: "Scout",
    tagline: "Market Research Expert",
    description: "Autonomous market research and competitive analysis for new territories",
    icon: Search,
    color: "bg-blue-100 text-blue-700",
    action: "Start Research"
  },
  {
    name: "Profiler",
    tagline: "ICP Builder",
    description: "Creates detailed ideal customer profiles with precision targeting",
    icon: Target,
    color: "bg-green-100 text-green-700",
    action: "Build Profile"
  },
  {
    name: "Strategist",
    tagline: "GTM Planner",
    description: "Develops comprehensive go-to-market strategies and roadmaps",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-700",
    action: "Create Strategy"
  },
  {
    name: "Playmaker",
    tagline: "Sales Playbook Creator",
    description: "Builds winning sales playbooks tailored to your market",
    icon: FileText,
    color: "bg-orange-100 text-orange-700",
    action: "Create Playbook"
  },
  {
    name: "Activator",
    tagline: "Campaign Launcher",
    description: "Launches and manages multi-channel marketing campaigns",
    icon: Megaphone,
    color: "bg-red-100 text-red-700",
    action: "Create New Campaign"
  },
  {
    name: "Presenter",
    tagline: "Demo Builder",
    description: "Creates compelling product demonstrations and presentations",
    icon: Monitor,
    color: "bg-teal-100 text-teal-700",
    action: "Build Demo"
  },
  {
    name: "Handler",
    tagline: "Objection Handler",
    description: "Addresses customer concerns with intelligent responses",
    icon: MessageSquare,
    color: "bg-pink-100 text-pink-700",
    action: "Handle Objections"
  },
  {
    name: "Proposer",
    tagline: "Proposal Writer",
    description: "Generates winning proposals and pricing strategies",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-700",
    action: "Create Proposal"
  },
  {
    name: "Closer",
    tagline: "Contract & Closing Support",
    description: "Manages contract negotiations and deal closing processes",
    icon: Handshake,
    color: "bg-yellow-100 text-yellow-700",
    action: "Close Deal"
  }
];

export const AgentsGrid = () => {
  const [isProfilerModalOpen, setIsProfilerModalOpen] = useState(false);
  const [isScoutModalOpen, setIsScoutModalOpen] = useState(false);
  const [isStrategistModalOpen, setIsStrategistModalOpen] = useState(false);
  const [isActivatorModalOpen, setIsActivatorModalOpen] = useState(false);
  const [isPresenterModalOpen, setIsPresenterModalOpen] = useState(false);

  const handleAgentAction = (agentName: string) => {
    if (agentName === "Profiler") {
      setIsProfilerModalOpen(true);
    } else if (agentName === "Scout") {
      setIsScoutModalOpen(true);
    } else if (agentName === "Strategist") {
      setIsStrategistModalOpen(true);
    } else if (agentName === "Activator") {
      setIsActivatorModalOpen(true);
    } else if (agentName === "Presenter") {
      setIsPresenterModalOpen(true);
    } else {
      // Handle other agent actions here if needed
      console.log(`${agentName} action triggered`);
    }
  };

  return (
    <>
      <section id="agents" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your AI GTM Dream Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nine specialized agents working together to accelerate your market expansion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${agent.color}`}>
                    <agent.icon className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg">{agent.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {agent.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {agent.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleAgentAction(agent.name)}
                >
                  {agent.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ProfilerModal 
        open={isProfilerModalOpen} 
        onOpenChange={setIsProfilerModalOpen} 
      />
      <ScoutModal 
        open={isScoutModalOpen} 
        onOpenChange={setIsScoutModalOpen} 
      />
      <StrategistModal 
        open={isStrategistModalOpen} 
        onOpenChange={setIsStrategistModalOpen} 
      />
      <ActivatorModal 
        open={isActivatorModalOpen} 
        onOpenChange={setIsActivatorModalOpen} 
      />
      <PresenterModal 
        open={isPresenterModalOpen} 
        onOpenChange={setIsPresenterModalOpen} 
      />
    </>
  );
};
