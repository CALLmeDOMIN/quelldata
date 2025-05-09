"use client";

import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

type TQuestion = {
  question: string;
  answear: string;
};

type TFaqProps = {
  questionsData: TQuestion[];
};

const Faq = ({ questionsData }: TFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-4 max-w-7xl flex flex-col gap-8 md:gap-16">
      <h2 className="text-2xl md:text-5xl font-bold text-slate-700 dark:text-slate-300">
        Frequently asked questions
      </h2>
      <ul className="w-full flex flex-col gap-2 border-b-2 border-b-neutral-200/80 dark:border-b-neutral-800/80">
        {questionsData.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={index}
              className="flex flex-col border-t border-neutral-200 dark:border-neutral-800 py-4"
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between items-center text-left transition-colors cursor-pointer ${
                  isOpen
                    ? "text-white dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                <h4 className="text-xl">{question.question}</h4>
                {isOpen ? (
                  <IconChevronUp className="text-white" />
                ) : (
                  <IconChevronDown />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                      {question.answear}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;

export const BUSINESS_QUESTIONS_DATA = [
  {
    question: "What is Quelldata?",
    answear:
      "Quelldata is a decentralized protocol for collecting and validating AI traning data, built on the Solana blockchain. It provides high-quality, community-verified datasets through open, transparent, and tamper-proof processes.",
  },
  {
    question: "How can I use the platform?",
    answear:
      "You post a data request with specific requirements (e.g. type, format, quality criteria) and set a reward in QLD tokens. Contributors submit data, and validators ensure its accuracy.",
  },
  {
    question: "What kind of data can I request?",
    answear:
      "Images, text, audio files, sensor data—any structured digital input that can be reviewed and verified.",
  },
  {
    question: "How do you ensure data quality?",
    answear:
      "Each dataset is randomly reviewed by independent validators. A transparent reputation system and automated slashing mechanism incentivize high standards.",
  },
  {
    question:
      "Is Quelldata compliant with data privacy and AI ethics standards?",
    answear:
      "Yes. Quelldata is designed with compliance in mind. All data submissions are anonymized by default, and contributors are instructed to avoid uploading any personally identifiable information (PII). We align with ethical AI principles and global data governance frameworks to support GDPR and similar standards.",
  },
  {
    question: "How are payments handled?",
    answear:
      "Once data is validated, payments are automatically distributed in QLD tokens. Smart contracts handle the entire reward process.",
  },
  {
    question: "Do I need to understand Web3?",
    answear:
      "Not at all. We provide a user-friendly interface—no crypto experience required. We handle the blockchain layer for you.",
  },
];

export const USERS_QUESTIONS_DATA = [
  {
    question: "How do I get started?",
    answear:
      "Sign up, choose an available task, and begin uploading or validating data. No technical background or degree is required.",
  },
  {
    question: "Do I need to reveal my identity?",
    answear:
      "No. You can participate anonymously. Your reputation is based purely on the quality of your work.",
  },
  {
    question: "How do I earn rewards?",
    answear:
      "You earn QLD tokens for completing tasks (by contributing accurate data or validating submissions). Higher reputation = better earning opportunities.",
  },
  {
    question: "What currency do I get paid in?",
    answear:
      "QLD tokens, issued on the Solana network. These can be traded or used within the Quelldata ecosystem (once live).",
  },
  {
    question: "How does validation work?",
    answear:
      "You receive a random sample of submitted data to review. The system cross-verifies validator feedback and distributes rewards accordingly.",
  },
  {
    question: "Can I participate using a phone?",
    answear:
      "Yes. Many tasks will be optimized for mobile devices for accessibility and convenience.",
  },
  {
    question: "What if I make a mistake?",
    answear:
      "Occasional mistakes are fine. However, repeated errors or intentional abuse will lower your reputation and reduce your earnings.",
  },
];
