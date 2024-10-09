"use client";

import { handleGoogleLogin, signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login({ searchParams }: { searchParams: Message }) {
  const [isLoading, setIsLoading] = useState(false)


  const handleLogin = async () => {

    handleGoogleLogin()
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">


        <form className=" flex-1 p-6 flex flex-col max-w-[300px] rounded-md bg-slate-100 shadow-lg dark:text-black">
          <button onClick={() => { handleLogin(); setIsLoading(true) }} className="flex justify-center ">< FcGoogle className="h-6 w-6" /> </button> {/* Updated the button */}
          <h1 className="text-2xl font-medium dark:text-black">Sign in</h1>
          <p className="text-sm text-foreground dark:text-black">
            Don't have an account?{" "}
            <Link className="text-foreground font-medium underline dark:text-black" href="/sign-up">
              Sign up
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" className="dark:text-white" required />
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                className="text-xs text-foreground underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              className="dark:text-white" required
            />
            <SubmitButton pendingText="Signing In..." formAction={signInAction} className="hover:text-white hover:bg-black">
              Sign in
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </>
  );
}
