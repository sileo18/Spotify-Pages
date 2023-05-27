import Image from 'next/image';
import SpotifyLogo from '../assets/spotify-logo.svg';

export default function CadastroPage() {
  return (
    <div className="grid min-h-screen grid-cols-10">
      {/* Left */}
      <div className="px-8 py-8 gap-10 items-center justify-center flex flex-col col-span-4 bg-black">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <Image
            src={SpotifyLogo}
            alt="Logo Spotify"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="cursor-pointer"
          />

          <h1 className="font-bold text-neutral-50 text-4xl">Sign Up</h1>
        </div>

        {/* Form */}

        <div className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Email</p>
            <input
              className="bg-transparent border text-lg  border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Email"
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

          {/* Fullname */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Fullname</p>
            <input
              className="relative bg-transparent border text-lg border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Fullname"
            />
          </div>
        </div>

        {/* Button */}
        <div>

        </div>
      </div>

      {/* Right */}
      <div className="col-span-6 bg-gray-100">A</div>
    </div>
  );
}
