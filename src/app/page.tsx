import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { Timeline } from "../components/Timeline";
import { DATA } from "@/components/ExploreContent";
import World from "@/components/World";

export default function Home() {
  return (
    <main className="mx-auto my-10 flex max-w-7xl flex-col gap-24">
      <Hero />
      <div className="w-full flex justify-center items-center">
        <button className="relative px-4 py-2 rounded-full bg-gray-200 dark:bg-zinc-800">
          For businesses
        </button>
        <button className="relative px-4 py-2 rounded-full ">For users</button>
      </div>
      <Benefits />
      <div className="relative w-full overflow-clip">
        <Timeline data={DATA} />
      </div>
      <World
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
            },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 },
          },
          {
            start: { lat: -15.7975, lng: -47.8919 },
            end: { lat: 38.7223, lng: -9.1393 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: 43.1332, lng: 131.9113 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
        ]}
      />
    </main>
  );
}
