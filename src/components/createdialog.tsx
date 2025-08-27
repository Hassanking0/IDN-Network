import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Calendar, 
  FileText, 
  Receipt 
} from 'lucide-react';

interface CreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateClient?: () => void;
  onCreateBooking?: () => void;
  onCreateQuote?: () => void;
  onCreateInvoice?: () => void;
}

export function CreateDialog({ 
  open, 
  onOpenChange,
  onCreateClient,
  onCreateBooking,
  onCreateQuote,
  onCreateInvoice
}: CreateDialogProps) {
  const createOptions = [
    {
      id: 'client',
      title: 'Client',
      icon: User,
      onClick: onCreateClient,
      className: 'bg-zinc-800 hover:bg-zinc-700 text-white'
    },
    {
      id: 'booking',
      title: 'Booking',
      icon: Calendar,
      onClick: onCreateBooking,
      className: 'bg-zinc-800 hover:bg-zinc-700 text-white'
    },
    {
      id: 'quotes',
      title: 'Quotes',
      icon: FileText,
      onClick: onCreateQuote,
      className: 'bg-zinc-800 hover:bg-zinc-700 text-white'
    },
    {
      id: 'invoice',
      title: 'Invoice',
      icon: Receipt,
      onClick: onCreateInvoice,
      className: 'bg-zinc-800 hover:bg-zinc-700 text-white'
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-medium text-zinc-300">
            What do you want to create?
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 py-4">
          {createOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Button
                key={option.id}
                variant="outline"
                className={`h-20 cursor-pointer flex flex-col items-center justify-center gap-2 border-zinc-700 ${option.className}`}
                onClick={() => {
                  option.onClick?.();
                  onOpenChange(false);
                }}
              >
                <IconComponent className="h-6 w-6" />
                <span className="text-sm">{option.title}</span>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Example usage component
export function CreateButtonWithDialog() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleCreateClient = () => {
    console.log('Creating client...');
    // Navigate to create client page or open client form
  };

  const handleCreateBooking = () => {
    console.log('Creating booking...');
    // Navigate to create booking page or open booking form
  };

  const handleCreateQuote = () => {
    console.log('Creating quote...');
    // Navigate to create quote page or open quote form
  };

  const handleCreateInvoice = () => {
    console.log('Creating invoice...');
    // Navigate to create invoice page or open invoice form
  };

  return (
    <>
      <Button 
        onClick={() => setDialogOpen(true)}
        className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white"
      >
        <span className="text-lg">+</span>
        Create
      </Button>

      <CreateDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCreateClient={handleCreateClient}
        onCreateBooking={handleCreateBooking}
        onCreateQuote={handleCreateQuote}
        onCreateInvoice={handleCreateInvoice}
      />
    </>
  );
}