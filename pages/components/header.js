import Image from 'next/image';
import SpotifyLogo from '../../assets/spotify-logo.svg';

export function Header() {
  return (
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
  )
}