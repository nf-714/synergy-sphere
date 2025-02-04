"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

export default function OrganizationStep() {
  const { control } = useFormContext<FormData>();
  console.log(control);

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="organization.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Organization Name</FormLabel>
            <FormControl>
              <Input placeholder="Organization Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="organization.bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Write a bio for your organization"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <p className="text-xs text-muted-foreground">Maximum 50 words</p>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
