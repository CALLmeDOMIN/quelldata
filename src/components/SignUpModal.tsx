"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  companyname: z.string().optional(),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Company name is required"),
});

export default function SignUpModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [error, setError] = useState<{ companyname?: string; email?: string }>(
    {}
  );
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = schema.safeParse({ company, email });
    if (!validationResult.success) {
      const fieldErrors: any = {};
      for (const issue of validationResult.error.issues) {
        fieldErrors[issue.path[0]] = issue.message;
      }
      setError(fieldErrors);
      return;
    }

    setError({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, email }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Email sent!");
        setCompany("");
        setEmail("");
        onClose();
      } else {
        alert("Sending failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-full max-w-md  p-6 shadow-lg rounded-xl   bg-[#0a0a0a]">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold  text-neutral-200">
                  Join the Waitlist
                </h2>
                <X className="size-5 cursor-pointer" onClick={onClose} />
              </div>

              <p className="mt-2 text-sm text-neutral-300">
                Be the first to access Quelldata. Get early updates, priority
                access, and help shape the future of AI data collection.
              </p>

              {/* Form */}
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <LabelInputContainer>
                  <Label htmlFor="companyname">Company name</Label>
                  <Input
                    id="companyname"
                    placeholder="Quelldata"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  {error.companyname && (
                    <p className="text-sm text-red-500">{error.companyname}</p>
                  )}
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="quell@mail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && (
                    <p className="text-sm text-red-500">{error.email}</p>
                  )}
                </LabelInputContainer>

                <button
                  type="submit"
                  className="w-full transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 bg-white text-black hover:bg-gray-200 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Join now →"}
                  <BottomGradient />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
