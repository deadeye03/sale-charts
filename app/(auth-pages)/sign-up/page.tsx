"use client"
import { handleGoogleLogin, signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";

export default function Signup({ searchParams }: { searchParams: Message }) {
  const [isLoading, setIsLoading] = useState(false)
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4 ">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  const handleLogin = async () => {

    handleGoogleLogin()
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
        <form className=" flex-1 p-6 flex flex-col max-w-[300px] rounded-md bg-slate-100 shadow-lg dark:text-black">
          <button onClick={()=>{handleLogin();setIsLoading(true)}} className="flex justify-center ">< FcGoogle className="h-6 w-6" /> </button>
          <h1 className="text-2xl font-medium dark:text-black">Sign up</h1>
          <p className="text-sm text text-foreground dark:text-black">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline dark:text-black" href="/sign-in">
              Sign in
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" className="dark:text-white" required />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              className="dark:text-white" required
            />
            <SubmitButton formAction={signUpAction} pendingText="Signing up..." className="hover:text-white hover:bg-black">
              Sign up
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </>
  );
}
