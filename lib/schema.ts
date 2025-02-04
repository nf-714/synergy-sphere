import * as z from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const organizationSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  bio: z.string().max(50, "Bio must not exceed 50 words"),
});

export const eventTypesSchema = z.object({
  eventTypes: z.array(z.string()).min(1, "Select at least one event type"),
  businessType: z.string().min(1, "Please select a business type"),
});

export const mediaSchema = z.object({
  profilePicture: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
  coverPhoto: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});

export const stripeSchema = z.object({
  stripeConnected: z.boolean(),
});

export const socialLinksSchema = z.object({
  instagram: z
    .string()
    .url("Please enter a valid Instagram URL")
    .or(z.literal("")),
  facebook: z
    .string()
    .url("Please enter a valid Facebook URL")
    .or(z.literal("")),
  twitter: z.string().url("Please enter a valid Twitter URL").or(z.literal("")),
  linkedin: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .or(z.literal("")),
});

export const inviteMemberSchema = z.object({
  email: z.string().email("Invalid email address"),
  role: z.enum(["Moderator", "Admin"], {
    required_error: "Please select a role",
  }),
});

export const formSchema = z.object({
  organization: organizationSchema,
  eventTypes: eventTypesSchema,
  media: mediaSchema,
  socialLinks: socialLinksSchema,
  inviteMembers: z.array(inviteMemberSchema),
  stripe: stripeSchema,
});

export type FormData = z.infer<typeof formSchema>;
