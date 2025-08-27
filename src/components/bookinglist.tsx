
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Booking {
  id: string;
  customerName: string;
  location: string;
  date: string;
  time: string;
  status: 'active' | 'pending' | 'completed';
}

interface ActiveBookingsListProps {
  bookings?: Booking[];
  onMenuClick?: () => void;
}

export function ActiveBookingsList({ 
  bookings = [], 
  onMenuClick 
}: ActiveBookingsListProps) {
  return (
    <div className=" text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-700">
        <h1 className="text-lg font-semibold">Active Bookings List</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="text-zinc-400 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        {bookings.length === 0 ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-zinc-500 text-lg mb-2">No active bookings</div>
              <p className="text-zinc-600 text-sm">
                Active bookings will appear here when available
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white">{booking.customerName}</h3>
                    <p className="text-zinc-400 text-sm">{booking.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zinc-300">{booking.date}</div>
                    <div className="text-sm text-zinc-400">{booking.time}</div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    booking.status === 'active' 
                      ? 'bg-green-900 text-green-200' 
                      : booking.status === 'pending'
                      ? 'bg-yellow-900 text-yellow-200'
                      : 'bg-gray-900 text-gray-200'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}