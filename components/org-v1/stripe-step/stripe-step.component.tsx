import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { FormData } from "@/lib/schema";
import { useFormContext } from "react-hook-form";

export default function StripeStep() {
  const { control, setValue } = useFormContext<FormData>();

  const connectStripe = async () => {
    // Here you would implement Stripe Connect
    // For demo purposes, we'll just set it to true
    setValue("stripe.stripeConnected", true);
  };

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="stripe.stripeConnected"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Connect with Stripe</FormLabel>
            <FormControl>
              <Button
                type="button"
                variant={field.value ? "outline" : "default"}
                onClick={connectStripe}
                className="w-full"
              >
                {field.value ? "Connected to Stripe" : "Connect Stripe Account"}
              </Button>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
