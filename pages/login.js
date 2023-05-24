import Image from 'next/image';
import Link from 'next/link';
import {
  Smartphone, Apple, Facebook, Chrome, Eye, EyeOff,
} from 'lucide-react';
import Switch from 'react-switch';
import React, { useState } from 'react';
import SpotifyLogo from '../assets/spotify-logo.svg';

export default function LoginPage() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="flex flex-col items-center bg-black min-h-screen space-y-10 min-w-full">
      {/* Header Login Page */}
      <header className="justify-self-start w-full px-12 py-6 bg-black">
        <Image
          src={SpotifyLogo}
          alt="Logo Spotify"
          width="160"
          height="160"
          viewBox="0 0 200 200"
          className="self-start cursor-pointer"
        />
      </header>

      {/* Form Login Page */}
      <div className="flex flex-col items-center justify-center gap-8 w-400 ">
        <h1 className="font-bold text-neutral-50 text-5xl">Log in to Spotify</h1>

        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <Link
            className="relative font-semibold inline-block rounded-full bg-transparent border text-center px-4 py-5 border-neutral-50 border-opacity-30 w-[380px] text-base uppercase leading-none text-white hover:border-opacity-100"
            href="/memories/new"
          >
            <Chrome className="absolute transform top-1/2 -translate-y-1/2" />
            Continue With Google
          </Link>

          <Link
            className="relative font-semibold inline-block rounded-full bg-transparent border text-center px-4 py-5 border-neutral-50 border-opacity-30 w-[380px] text-base uppercase leading-none text-white hover:border-opacity-100"
            href="/memories/new"
          >
            <Facebook className="absolute transform top-1/2 -translate-y-1/2" />
            Continue With Facebook
          </Link>
          <Link
            className="relative font-semibold inline-block rounded-full bg-transparent border text-center px-4 py-5 border-neutral-50 border-opacity-30 w-[380px] text-base uppercase leading-none text-white hover:border-opacity-100"
            href="/memories/new"
          >
            <Apple className="absolute transform top-1/2 -translate-y-1/2" />
            Continue With Apple
          </Link>
          <Link
            className="relative font-semibold inline-block rounded-full bg-transparent border text-center px-4 py-5 border-neutral-50 border-opacity-30 w-[380px] text-base uppercase leading-none text-white hover:border-opacity-100"
            href="/memories/new"
          >
            <Smartphone className="absolute transform top-1/2 -translate-y-1/2" />
            Continue With Phone Number
          </Link>
        </div>

        {/* White Line */}
        <div className="h-[1px] w-[600px] bg-white opacity-20" />

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Email or username</p>
            <input
              className="bg-transparent border text-lg  border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Email or username"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Password</p>
            <input
              className="relative bg-transparent border text-lg border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Password"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mt-2">
            <Switch checked={isPublic} onChange={(checked) => setIsPublic(checked)} className="" />
            {' '}
            <span className="text-neutral-50 text-base font-semibold">Remember Me</span>
          </div>

          {/* Button Log In */}
          <button className="mt-6 bg-green-500 py-4 hover:transform hover:scale-105  transition-transform duration-300 font-bold text-xl rounded-full text-black">
            Log In
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
}
