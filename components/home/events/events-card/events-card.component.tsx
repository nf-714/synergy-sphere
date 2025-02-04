import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}

export function EventCard({ title, date, location, imageUrl }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="font-semibold">{title}</CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          {date}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          {location}
        </div>
      </CardContent>
    </Card>
  );
}
