import { Nav } from "@/components/main/nav";
import { Hero } from "@/components/main/hero";
import { WorksSection } from "@/components/main/works-section";
import { AppSection } from "@/components/main/app-section";
import { Footer } from "@/components/main/footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <Hero />
      <WorksSection />
      <AppSection />
      <Footer />
    </main>
  );
}
