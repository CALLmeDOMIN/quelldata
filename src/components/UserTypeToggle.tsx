"use client";

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
      <button
        onClick={() => setUserType("business")}
        className={`text-medium md:text-lg px-4 py-2 rounded-full dark:text-white cursor-pointer transition-colors duration-300 ${
          !isUser ? "bg-zinc-700" : ""
        }`}
      >
        For businesses
      </button>

      <button
        onClick={() => setUserType("user")}
        className={`text-medium md:text-lg px-4 py-2 rounded-full dark:text-white cursor-pointer transition-colors duration-300 ${
          isUser ? "bg-zinc-700" : ""
        }`}
      >
        For users
      </button>
    </div>
  );
}
