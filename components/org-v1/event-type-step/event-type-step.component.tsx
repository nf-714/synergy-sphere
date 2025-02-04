import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

const EVENT_TYPES = [
  { id: "conference", label: "Conference" },
  { id: "workshop", label: "Workshop" },
  { id: "seminar", label: "Seminar" },
  { id: "webinar", label: "Webinar" },
  { id: "meetup", label: "Meetup" },
];

const BUSINESS_TYPES = [
  { value: "startup", label: "Startup" },
  { value: "enterprise", label: "Enterprise" },
  { value: "agency", label: "Agency" },
  { value: "nonprofit", label: "Non-profit" },
];

export default function EventTypesStep() {
  const { control, watch } = useFormContext<FormData>();
  const selectedEventTypes = watch("eventTypes.eventTypes");

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="eventTypes.eventTypes"
        render={() => (
          <FormItem>
            <FormLabel>What type of events will you organize?</FormLabel>
            <div className="grid gap-4 pt-2">
              {EVENT_TYPES.map((type) => (
                <FormField
                  key={type.id}
                  control={control}
                  name="eventTypes.eventTypes"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== type.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="eventTypes.businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What type of business is it?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BUSINESS_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
