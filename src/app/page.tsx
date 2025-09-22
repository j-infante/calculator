"use client";
import Link from "next/link";
import React from "react"; 
import { CalculatorIcon, PaintBrushIcon } from '@heroicons/react/24/solid'

export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <header className="line-b fixed inset-x-0 top-0 z-20 mr-[calc(100%-100vw)] flex h-14 items-center 
        justify-between bg-white px-4 text-black after:-bottom-px sm:px-6 dark:bg-gray-950 dark:text-white">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Fun Code Collections</h1>
          </div>
          <div className="flex items-center justify-end gap-5 max-md:hidden lg:gap-6 ">
            <div>
              <Link href="/login" >Login</Link>
            </div>
          </div>
        </header> */}
        <header className="line-b fixed inset-x-0 top-0 z-20 mr-[calc(100%-100vw)] flex h-14 items-center bg-white px-4 text-black after:-bottom-px sm:px-6 dark:bg-gray-950 dark:text-white">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Fun Code Collections</h1>
          </div>

          {/* Right Side: Added ml-auto to push this block to the right */}
          <div className="ml-auto flex items-center justify-end gap-5 max-md:hidden lg:gap-6">
            <div>
              <Link href="/login" >Login</Link>
            </div>
          </div>
        </header>
        <div className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
          <div className="relative rounded-3xl bg-gray-800 p-8 ring-1 ring-white/10 sm:p-10">
            <PaintBrushIcon className="h-6 w-6 text-white" />
            <Link href="/colorflipper" className="text-blue-500 hover:underline">
              Color Flipper
            </Link>
          </div>
          <div className="relative rounded-3xl bg-gray-800 p-8 ring-1 ring-white/10 sm:p-10">
            <div>
              <CalculatorIcon className="h-6 w-6 text-white" />
            </div>
            <Link href="/calculator" className="text-blue-500 hover:underline">
              Calculator
            </Link>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}
