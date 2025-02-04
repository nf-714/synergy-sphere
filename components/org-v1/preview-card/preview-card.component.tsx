"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { formSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import AnimatedStep from "../animated-steps/animated-steps.component";
import EventTypesStep from "../event-type-step/event-type-step.component";
import InviteMemberStep from "../invite-members-step/invite-members-step.component";
import MediaStep from "../media-step/media-step.component";
import OrganizationStep from "../organization-step/organization-step.component";
import ProfilePreview from "../preview/preview.component";
import SocialLinksStep from "../social-link-step/social-link-step.component";
import StripeStep from "../stripe-step/stripe-step.component";

export default function ProfileCreator() {
  const [step, setStep] = useState(0);
  const [previewData, setPreviewData] = useState<Partial<FormData>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [firstName, setFirstName] = useState(true);
  const [lastName, setLastName] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organization: {
        name: "",
        bio: "",
      },
      eventTypes: {
        eventTypes: [],
        businessType: "",
      },
      media: {
        profilePicture: null,
        coverPhoto: null,
      },
      socialLinks: {
        instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
      },
      inviteMembers: [],
      stripe: {
        stripeConnected: false,
      },
    },
  });

  const nextStep = async () => {
    let fields: string[] = [];
    switch (step) {
      case 0:
        fields = ["organization.name", "organization.bio"];
        break;
      case 1:
        fields = ["eventTypes.eventTypes", "eventTypes.businessType"];
        break;
      case 2:
        fields = ["media.profilePicture", "media.coverPhoto"];
        break;
      case 3:
        fields = [
          "socialLinks.instagram",
          "socialLinks.facebook",
          "socialLinks.twitter",
          "socialLinks.linkedin",
        ];
        break;
      case 4:
        fields = ["inviteMembers"];
        break;
      case 5:
        fields = ["stripe.stripeConnected"];
        break;
    }

    const isValid = await form.trigger(fields);
    if (isValid) {
      setPreviewData({ ...previewData, ...form.getValues() });
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsModalOpen(true);
    // Handle form submission
  };

  const steps = [
    <OrganizationStep key="organization" />,
    <EventTypesStep key="eventTypes" />,
    <MediaStep key="media" />,
    <SocialLinksStep key="socialLinks" />,
    <InviteMemberStep key="inviteMembers" />,
    <StripeStep key="stripe" />,
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Input Section */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <div>
          <p className="text-sm text-muted-foreground">Step {step + 1}/6</p>
          <h1 className="text-3xl font-bold">Create your profile</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              <AnimatedStep key={step}>{steps[step]}</AnimatedStep>
            </AnimatePresence>

            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {step > 0 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Previous
                </motion.button>
              )}
              {step < 5 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="ml-auto rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Complete Profile
                </motion.button>
              )}
            </motion.div>
          </form>
        </Form>
      </div>

      {/* Preview Section */}
      <div className="p-6 lg:p-8 xl:p-12 bg-blue-600">
        <ProfilePreview data={previewData} />
      </div>
    </div>
  );
}
