import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ActivatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ActivatorModal = ({ open, onOpenChange }: ActivatorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Activator - Campaign Management</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <img 
            src="/lovable-uploads/ff76af78-85ae-4a98-85bc-9d326a011961.png" 
            alt="Activator Campaign Management Interface"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};