import Hero from "@/components/hero";
import Vision from "@/components/vision";
import Separator from "@/components/separator";

export default function Home() {
  return (
    <main className="py-20 max-md:py-10">
      <Hero />
      <Separator />
      <Vision />
    </main>
  );
}
