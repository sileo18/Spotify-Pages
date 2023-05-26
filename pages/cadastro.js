import Image from 'next/image';
import SpotifyLogo from '../assets/spotify-logo.svg';

export default function CadastroPage() {
  return (
    <div className="grid min-h-screen grid-cols-10">
      {/* Left */}
      <div className="px-8 py-8 items-center justify-center flex flex-col col-span-4 bg-black">
        <div className="" />
        <Image
          src={SpotifyLogo}
          alt="Logo Spotify"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="cursor-pointer"
        />
      </div>

      {/* Right */}
      <div className="col-span-6 bg-gray-100">A</div>
    </div>
  );
}
