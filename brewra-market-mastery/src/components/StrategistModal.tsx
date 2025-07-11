
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StrategistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StrategistModal = ({ open, onOpenChange }: StrategistModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Strategist - GTM Planner in Action</DialogTitle>
          <DialogDescription>
            See how the Strategist agent develops comprehensive go-to-market strategies and roadmaps
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img 
            src="/lovable-uploads/bb2856d2-4cc7-4e6f-909a-56fe2e986619.png" 
            alt="Strategist agent interface showing GTM plan summary with UK and German expansion strategies"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
