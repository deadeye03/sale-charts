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

          {isLoading &&
            <div role="status" className='fixed flex-col left-0 top-0 flex justify-center items-center bg-opacity-5 bg-white h-[100vh] w-full z-[100] dark:bg-black '>
              <svg aria-hidden="true" className="inline w-8 h-8 text-black animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
              <span className='text-black dark:text-white' >Please Wait it's take some time...... </span>
            </div>}

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
