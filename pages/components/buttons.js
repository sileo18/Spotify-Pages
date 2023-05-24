import Link from 'next/link';
import {
  Smartphone, Apple, Facebook, Chrome, Eye, EyeOff,
} from 'lucide-react';

export function Buttons() {
  return (
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
  )
}