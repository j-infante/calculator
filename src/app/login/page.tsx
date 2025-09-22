import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function LoginPage() {
  return (
    <div>
    <header className="line-b fixed inset-x-0 top-0 z-20 mr-[calc(100%-100vw)] flex h-14 flex-row-reverse justify-between bg-white px-4 text-black after:-bottom-px sm:px-6 dark:bg-gray-950 dark:text-white">
      <div className="flex items-center gap-5 max-md:hidden lg:gap-6">
        <div>
          <Link href="/" >
            <XMarkIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </header>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </div>
    </div>
  );
}