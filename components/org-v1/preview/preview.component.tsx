import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { FormData } from "@/lib/schema";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Users } from "lucide-react";
import Image from "next/image";

export default function ProfilePreview({ data }: { data: Partial<FormData> }) {
  return (
    <Card className="overflow-hidden">
      <motion.div
        className="aspect-[3/1] w-full bg-gray-100"
        initial={false}
        animate={{ opacity: data.media?.coverPhoto ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {data.media?.coverPhoto && (
          <Image
            src={
              URL.createObjectURL(data.media.coverPhoto) || "/placeholder.svg"
            }
            alt="Cover"
            width={600}
            height={200}
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>
      <CardHeader className="relative">
        <motion.div
          className="absolute -top-12 left-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white"
          initial={false}
          animate={{ opacity: data.media?.profilePicture ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {data.media?.profilePicture ? (
            <Image
              src={
                URL.createObjectURL(data.media.profilePicture) ||
                "/placeholder.svg"
              }
              alt="Profile"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-100" />
          )}
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <motion.div layout>
          <motion.h2 className="text-xl font-semibold" layout="position">
            {data.organization?.name || "Organization Name"}
          </motion.h2>
          <motion.p className="text-sm text-muted-foreground" layout="position">
            {data.organization?.bio || "Organization bio will appear here"}
          </motion.p>
        </motion.div>

        <motion.div layout>
          <div className="flex gap-4">
            <AnimatePresence>
              {data.socialLinks?.twitter && (
                <motion.a
                  href={data.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
              )}
              {data.socialLinks?.instagram && (
                <motion.a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              )}
              {data.socialLinks?.facebook && (
                <motion.a
                  href={data.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
              )}
              {data.socialLinks?.linkedin && (
                <motion.a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {
          <AnimatePresence>
            {data.eventTypes?.eventTypes?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-2 font-medium text-sm">Hosting</div>
                <div className="flex flex-wrap gap-2 items-center">
                  {data.eventTypes.eventTypes.map((type) => (
                    <Badge key={type} variant="secondary">
                      {type}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        }

        <AnimatePresence>
          {data.eventTypes?.businessType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-2 font-medium">Business Type</h3>
              <Badge variant="outline">{data.eventTypes.businessType}</Badge>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {data.inviteMembers && data.inviteMembers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-2 font-medium">Team Members</h3>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {data.inviteMembers.length}{" "}
                  {data.inviteMembers.length === 1 ? "member" : "members"}{" "}
                  invited
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
