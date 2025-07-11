import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PresenterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PresenterModal = ({ open, onOpenChange }: PresenterModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Presenter - Demo Preparation</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <img 
            src="/lovable-uploads/fccab822-53bb-4253-9cb8-1051f9395a74.png" 
            alt="Presenter Demo Preparation Interface"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};