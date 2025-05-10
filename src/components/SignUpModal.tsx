'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function SignUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
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
            <div className="relative w-full max-w-md bg-white p-6 shadow-lg rounded-xl dark:bg-black">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome to Quelldata</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                Join our whitelist if you can because we don&apos;t have a login flow yet
              </p>

              {/* Form */}
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <LabelInputContainer>
                  <Label htmlFor="companyname">Company name</Label>
                  <Input id="companyname" placeholder="Quelldata" type="text" />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>

                <button
                  type="submit"
                  className="relative h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white dark:bg-zinc-800"
                >
                  Join us &rarr;
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>;
};
