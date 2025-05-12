'use client';

type TUserTypeToggleProps = {
  isUser: boolean;
  setUserType: (type: 'user' | 'business') => void;
};

export default function UserTypeToggle({ isUser, setUserType }: TUserTypeToggleProps) {
  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-zinc-800">
      <button
        onClick={() => setUserType('business')}
        className={`text-medium cursor-pointer rounded-full px-4 py-2 text-white transition-colors duration-300 md:text-lg ${
          !isUser ? 'bg-zinc-700' : ''
        }`}
      >
        For businesses
      </button>

      <button
        onClick={() => setUserType('user')}
        className={`text-medium cursor-pointer rounded-full px-4 py-2 text-white transition-colors duration-300 md:text-lg ${
          isUser ? 'bg-zinc-700' : ''
        }`}
      >
        For users
      </button>
    </div>
  );
}
