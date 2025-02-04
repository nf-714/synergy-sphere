import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormData } from "@/lib/schema";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function SocialLinksStep() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Add your social media profiles to help people connect with you
      </div>

      <FormField
        control={control}
        name="socialLinks.instagram"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </FormLabel>
            <FormControl>
              <Input
                placeholder="https://instagram.com/yourusername"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="socialLinks.facebook"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              Facebook
            </FormLabel>
            <FormControl>
              <Input placeholder="https://facebook.com/yourpage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="socialLinks.twitter"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Twitter className="h-4 w-4" />
              Twitter
            </FormLabel>
            <FormControl>
              <Input
                placeholder="https://twitter.com/yourusername"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="socialLinks.linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </FormLabel>
            <FormControl>
              <Input
                placeholder="https://linkedin.com/in/yourusername"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
