import { z } from "zod";
import { create } from "zustand";

export const organizationFormSchema = z.object({
  stepCount: z.number(),
  organizationName: z
    .string()
    .min(2, "Organization name must be at least 4 characters"),
  bio: z.string().max(50, "Bio must be less than 50 words"),
  type: z.enum(
    ["Tech", "Business", "Finance", "Agency", "Development", "Other"],
    {
      required_error: "Please select a gender",
    }
  ),
  coverPhoto: z.string().optional(),
  coverPhotoName: z.string().optional(),
  profileImage: z.string().optional(),
  profileImageName: z.string().optional(),
  socialLinks: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
  }),
});

export type FormData = z.infer<typeof organizationFormSchema>;

interface OrganizationFormState {
  data: FormData;
  isSubmitted: boolean;
  setStep: (step: number) => void;
  setField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  submitForm: (data: FormData) => void;
  resetForm: () => void;
}

const initialState: FormData = {
  stepCount: 1,
  organizationName: "",
  bio: "",
  type: "Tech",
  coverPhoto: "",
  coverPhotoName: "",
  profileImage: "",
  profileImageName: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
};

export const useOrgFormStore = create<OrganizationFormState>((set) => ({
  data: initialState,
  isSubmitted: false,
  setField: (field, value) =>
    set((state) => ({
      data: { ...state.data, [field]: value },
    })),

  setStep: (step) =>
    set((state) => ({
      data: { ...state.data, stepCount: step },
    })),
  submitForm: (data) =>
    set({
      data,
      isSubmitted: true,
    }),
  resetForm: () =>
    set({
      data: initialState,
      isSubmitted: false,
    }),
}));
