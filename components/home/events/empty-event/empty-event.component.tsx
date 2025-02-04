import { Button } from "@/components/ui/button";
import { Calendar, Plus } from "lucide-react";

interface EmptyEventsProps {
  type: "upcoming" | "past";
}

export function EmptyEvents({ type }: EmptyEventsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <Calendar className="h-10 w-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No {type} events</h3>
      <p className="text-muted-foreground mb-6">
        {type === "upcoming"
          ? "You have no upcoming events. Why not host one?"
          : "You haven't attended any events yet."}
      </p>
      {type === "upcoming" && (
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Event
        </Button>
      )}
    </div>
  );
}
