
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ScoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScoutModal = ({ open, onOpenChange }: ScoutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Scout - Market Research Expert in Action</DialogTitle>
          <DialogDescription>
            See how the Scout agent conducts autonomous market research and competitive analysis
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img 
            src="/lovable-uploads/80ee246b-ad6c-42df-9579-c7f20c0c40c3.png" 
            alt="Scout agent interface showing market intelligence dashboard with lead pipeline"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
