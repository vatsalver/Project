import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import { HoveredLink } from "@/components/ui/navbar-menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] bg-transparent">
      <HeroSection />
      <Card></Card>
      <HoveredLink></HoveredLink>
    </main>
  );
}
