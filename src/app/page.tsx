"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { Timeline } from "../components/Timeline";
import { USERS_DATA, BUSINESS_DATA } from "@/components/ExploreContent";
import World from "@/components/World";
import Footer from "../components/Footer";
import UserTypeToggle from "@/components/UserTypeToggle";
import Faq from "@/components/Faq";
import SignUpModal from "../components/SignUpModal";
import {
  USERS_QUESTIONS_DATA,
  BUSINESS_QUESTIONS_DATA,
} from "@/components/Faq";

export default function Home() {
  const [userType, setUserType] = useState<"business" | "user">("business");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isUser = userType === "user";

  return (
    <main className="mx-auto md:my-10 flex max-w-7xl flex-col gap-16 md:gap-24">
      <Hero openForm={() => setIsFormOpen(true)} />
      <UserTypeToggle isUser={isUser} setUserType={setUserType} />
      {!isUser && <Benefits />}
      <div className="relative w-full overflow-clip">
        <Timeline data={isUser ? USERS_DATA : BUSINESS_DATA} />
      </div>
      <Faq
        questionsData={isUser ? USERS_QUESTIONS_DATA : BUSINESS_QUESTIONS_DATA}
      />
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
      <Footer />
      <SignUpModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
}
