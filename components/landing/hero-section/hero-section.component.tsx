import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const backgroundColor = {
    backgroundColor: "hsla(214,94%,93%,1)",
    backgroundImage: `
      radial-gradient(at 80% 100%, hsla(225,84%,20%,0.54) 0px, transparent 50%),
      radial-gradient(at 0% 16%, hsla(225,84%,20%,0.42) 0px, transparent 50%)
    `,
  };

  const background = {
    backgroundColor: "hsla(214,94%,93%,1)",
    backgroundImage: `
      radial-gradient(at 89% 62%, hsla(225,84%,49%,0.39) 0px, transparent 50%),
      radial-gradient(at 1% 0%, hsla(225,84%,49%,0.27) 0px, transparent 50%)
    `,
  };
  return (
    <div className="relative h-screen">
      <div className="px-4 sm:px-6 flex flex-col items-center gap-4 py-8 text-center md:py-16 lg:py-20">
        <div className="rounded-full p-4">
          <Image src="/logo.svg" alt="SynergySphere" width={84} height={84} />
        </div>
        <h1 className="text-blue-700 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Connect and Collaborate at Business Events
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Streamline your business events with our comprehensive platform.
          Network, schedule meetings, and track engagement all in one place.
        </p>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Create Account
          </Button>
          <Button size="lg" variant="outline">
            Learn more
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2 sm:gap-4">
          <p className="text-sm text-muted-foreground">
            Trusted by specialist at
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 grayscale">
            <Image
              src={`${
                process.env.NEXT_PUBLIC_ASSETS_URL || "https://v0.blob.com"
              }/ZFDW4.png`}
              alt="Trusted companies"
              width={1000}
              height={100}
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
