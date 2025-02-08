import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Clock, MapPin, Users } from "lucide-react";

import Image from "next/image";

interface EventPreviewProps {
  event: {
    eventName: string;
    shortDescription: string;
    location: string;
    coverImage: string;
    date: Date;
    startTime: string;
    endTime: string;
    timezone: string;
    detailedDescription: string;
  };
  onEdit: () => void;
}

export function EventPreview({ event, onEdit }: EventPreviewProps) {
  console.log(event);
  return (
    <>
      {/* Header Image */}
      <div className="w-full bg-white py-8 pt-20">
        <div className="max-w-[93%] mx-auto relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={
              event.coverImage ||
              "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=2000"
            }
            fill
            alt={event.eventName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-white text-sm">
                  Workshop
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Users className="w-4 h-4" />
                  <span>63 attending</span>
                </div>
              </div>
              <h2 className="text-white text-5xl font-bold mb-2">
                {event.eventName}
              </h2>
              <p className="text-white/80">
                by <span className="text-blue-400">Event Organizer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{event.eventName}</h1>
              <p className="text-gray-600 text-lg">{event.shortDescription}</p>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex flex-col items-center justify-center border border-blue-100">
                  <div className="text-sm font-medium text-blue-600">
                    {event.date
                      .toLocaleString("default", { month: "short" })
                      .toUpperCase()}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {event.date.getDate()}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-lg">
                  {event.date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.startTime} - {event.endTime} {event.timezone}
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-blue-100/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🎟️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                        Register Now
                      </h3>
                      <p className="text-sm text-gray-600">
                        Limited spots available!
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">Free</div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    Register for Event
                  </button>
                  <button className="px-6 py-3 bg-white rounded-xl font-medium text-blue-600 hover:bg-blue-50 transition-colors border border-blue-100">
                    Share Event
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">About This Event</h2>
              <div
                className="prose max-w-none"
                suppressHydrationWarning
                data-color-mode="white"
              >
                <MarkdownPreview source={event.detailedDescription} />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Hosted By</h3>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Event Organizer</div>
                  <div className="text-sm text-gray-600">Host</div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Contact Host
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Share Event</h3>
              <p className="text-sm text-gray-600 mb-4">
                Invite your friends and colleagues
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Copy Link
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button onClick={onEdit} className="bg-blue-600 hover:bg-blue-700">
          Edit Event
        </Button>
      </div>
    </>
  );
}
