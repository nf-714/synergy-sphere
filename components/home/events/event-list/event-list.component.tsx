"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyEvents } from "../empty-event/empty-event.component";
import { EventCard } from "../events-card/events-card.component";

// Mock data - in a real app this would come from an API
const upcomingEvents: any = [];
const pastEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "Dec 15, 2024",
    location: "San Francisco, CA",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Design Workshop",
    date: "Dec 10, 2024",
    location: "New York, NY",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
];

export default function EventList() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Events</h1>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            {upcomingEvents.length === 0 ? (
              <EmptyEvents type="upcoming" />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event: any) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="past">
            {pastEvents.length === 0 ? (
              <EmptyEvents type="past" />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
