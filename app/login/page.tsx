// mark as client component
"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="w-full flex flex-col items-center mt-12 mx-auto">
      <a
        href="https://twitter.com/nutlope/status/1635674124738523139?cxt=HHwWhsCz1ei8irMtAAAA"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-700 text-base rounded-2xl py-2 px-4 my-6 duration-300 ease-in-out hover:text-gray-800 transition font-poppins">
        Over{" "}
        <span className="font-semibold text-pink-500">2 million users</span>{" "}
        have used MerrySnap so far
      </a>
      <h1 className="mx-auto max-w-[700px] text-4xl font-bold sm:text-6xl mb-5">
        Magical photos, instantly with {""}
        <span className="text-pink-500">MerrySnap</span>
      </h1>
      <div className="max-w-lg leading-8 text-base mb-5">
        Sign in below to create a free account and get your magical photo today.
        You will get <b>1 generation</b> for free.
      </div>
      <button
        className="flex items-center justify-center gap-2 hover:bg-slate-100 hover:dark:bg-slate-900 dark:text-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-gray-300 mb-4"
        onClick={() => signIn("google")}>
        <FaGoogle />
        <span>Sign in with Google</span>
      </button>
      <button
        className="flex items-center justify-center gap-2 hover:bg-slate-100 hover:dark:bg-slate-900 dark:text-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-gray-300 mb-4"
        onClick={() => signIn("github")}>
        <FaGithub />
        Sign in with Github
      </button>
    </div>
  );
}
