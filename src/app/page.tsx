import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { Timeline } from "../components/Timeline";
import { DATA } from "@/components/ExploreContent";

export default function Home() {
  return (
    <main className="mx-auto my-10 flex max-w-7xl flex-col gap-24">
      <Hero />
      <Benefits />
      <div className="relative w-full overflow-clip">
        <Timeline data={DATA} />
      </div>
    </main>
  );
}
