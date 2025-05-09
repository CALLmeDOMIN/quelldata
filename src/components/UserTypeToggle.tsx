"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type TUserTypeToggleProps = {
  isUser: boolean;
  setUserType: (type: "user" | "business") => void;
};

export default function UserTypeToggle({
  isUser,
  setUserType,
}: TUserTypeToggleProps) {
  return (
    <div className="mx-auto w-fit flex justify-center items-center gap-2 bg-gray-200 dark:bg-zinc-800 rounded-full">
      <motion.button
        onClick={() => setUserType("business")}
        animate={{
          backgroundColor: isUser ? "" : "#3f3f46",
        }}
        transition={{ duration: 0.3 }}
        className="text-medium md:text-lg px-4 py-2 rounded-full dark:text-white cursor-pointer"
      >
        For businesses
      </motion.button>

      <motion.button
        onClick={() => setUserType("user")}
        animate={{
          backgroundColor: isUser ? "#3f3f46" : "",
        }}
        transition={{ duration: 0.3 }}
        className="text-medium md:text-lg px-4 py-2 rounded-full dark:text-white cursor-pointer"
      >
        For users
      </motion.button>
    </div>
  );
}
