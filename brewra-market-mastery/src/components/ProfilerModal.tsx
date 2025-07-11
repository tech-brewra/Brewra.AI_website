
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProfilerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfilerModal = ({ open, onOpenChange }: ProfilerModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Profiler - ICP Builder in Action</DialogTitle>
          <DialogDescription>
            See how the Profiler agent creates detailed ideal customer profiles with precision targeting
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img 
            src="/lovable-uploads/c6e2384a-b42c-4651-baaf-29ad745ba9b2.png" 
            alt="Profiler agent interface showing ICP cards for UK market segments"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
