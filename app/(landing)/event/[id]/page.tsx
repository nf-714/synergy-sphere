import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function Event() {
  return (
    <>
      {/* Header Image */}
      <div className="w-full bg-white py-8 pt-20">
        <div className="max-w-[93%] mx-auto relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=2000"
            fill
            alt="Hong Kong Skyline"
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
                How to raise million dollar as a fund
              </h2>
              <p className="text-white/80">
                by <span className="text-blue-400">Attention Network</span>
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
              <h1 className="text-4xl font-bold mb-4">
                Raise Million Dollars with a tweek
              </h1>
              <p className="text-gray-600 text-lg">
                Join us for an evening of design, networking, and inspiration in
                the heart of Hong Kong.
              </p>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex flex-col items-center justify-center border border-blue-100">
                  <div className="text-sm font-medium text-blue-600">DEC</div>
                  <div className="text-2xl font-bold text-blue-600">3</div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-lg">
                  Tuesday, December 3, 2024
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  7:00 PM - 9:00 PM GMT+8
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Innovation Tower, Kowloon
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
            <div className="flex items-center space-x-4 mt-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">About This Event</h2>
                <div className="prose max-w-none">
                  <p>
                    We're thrilled to invite you to our very first official
                    Framer event in Hong Kong! Join a vibrant community of
                    design and tech enthusiasts who share a passion for
                    exceptional web design.
                  </p>
                  <h3 className="text-xl font-semibold mt-5 mb-2">
                    What to Expect
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Interactive design workshops</li>
                    <li>Networking opportunities</li>
                    <li>Live demonstrations</li>
                    <li>Q&A sessions with experts</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-5 mb-2">Schedule</h3>
                  <div className="space-y-4 not-prose">
                    {[
                      "7:00 PM - Registration",
                      "7:30 PM - Welcome Speech",
                      "8:00 PM - Main Presentation",
                      "8:45 PM - Networking",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                  <div className="font-medium">Ali</div>
                  <div className="text-sm text-gray-600">Event Organizer</div>
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
    </>
  );
}
