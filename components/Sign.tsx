"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";

const Sign: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!session) {
    return (
      <button
        onClick={() => router.push("/login")}
        className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg">
        Sign in
      </button>
    );
  }

  return (
    <>
      {/* Desktop*/}
      <div className="hidden md:block relative" ref={dropdownRef}>
        <div
          className="w-9 h-9 rounded-full overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsOpen(true)}>
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="User Avatar"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>

        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ease-in-out"
            onMouseLeave={() => setIsOpen(false)}>
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-lg">{session.user?.name}</p>
              <p className="text-sm opacity-90">{session.user?.email}</p>
            </div>
            <div className="pb-2">
              <button
                className="w-full flex items-center gap-2 text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
                onClick={() => router.push("/settings")}>
                <FiSettings />
                <span>Settings</span>
              </button>
              <button
                className="w-full flex items-center gap-2  text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
                onClick={() => signOut()}>
                <FiLogOut />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="User Avatar"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
        <p className="font-semibold text-lg">{session.user?.name}</p>
      </div>
    </>
  );
};

export default Sign;
