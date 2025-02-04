import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormData } from "@/lib/schema";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

export default function MediaStep() {
  const { control, watch } = useFormContext<FormData>();
  const profilePicture = watch("media.profilePicture");
  const coverPhoto = watch("media.coverPhoto");

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="media.profilePicture"
        render={({ field: { onChange, value, ...field } }) => (
          <FormItem>
            <FormLabel>Profile Picture</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files?.[0])}
                {...field}
              />
            </FormControl>
            {value && (
              <div className="mt-2 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={URL.createObjectURL(value) || "/placeholder.svg"}
                  alt="Profile preview"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="media.coverPhoto"
        render={({ field: { onChange, value, ...field } }) => (
          <FormItem>
            <FormLabel>Cover Photo</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files?.[0])}
                {...field}
              />
            </FormControl>
            {value && (
              <div className="mt-2 aspect-[3/1] w-full overflow-hidden rounded-lg">
                <Image
                  src={URL.createObjectURL(value) || "/placeholder.svg"}
                  alt="Cover preview"
                  width={600}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
