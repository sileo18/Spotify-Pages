import Image from 'next/image';
import SpotifyLogo from '../assets/spotify-logo.svg';
import BgShow from '../assets/photoshow.jpg';
import Link from 'next/link';
import React, { useState } from 'react';

export default function CadastroPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3333/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullname
        })
      });
  
      if (response.ok) {
        setSuccessMessage('Registro feito com sucesso!');
        // Redirecionar ou realizar outras ações necessárias
      } else if (response.status === 400) {
        const { error } = await response.json();
        setSuccessMessage(`Erro no registro: ${error}`);
      } else {
        throw new Error('Erro de servidor');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('Ocorreu um erro ao fazer o registro.');
    }
  };


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
           {successMessage && ( // Renderiza o aviso se a mensagem de sucesso existir
          <div className="bg-green-500 text-white text-center py-2 px-4 rounded">
            {successMessage}
          </div>
        )}

          <h1 className="font-bold text-neutral-50 text-4xl">Sign Up</h1>
        </div>

        {/* Form */}

        <form className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Email</p>
            <input
              className="bg-transparent border text-lg  border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Password</p>
            <input
              className="relative bg-transparent border text-lg border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Fullname */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Fullname</p>
            <input
              className="relative bg-transparent border text-lg border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </form>

        {/* Button */}
        <div>
        <button onClick={handleSignUp} className="mt-6 bg-green-500 py-4 w-[300px] hover:transform hover:scale-105  transition-transform duration-300 font-bold text-xl rounded-full text-black">
            Sign Up
            {' '}
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-6  bg-[url('../assets/photoshow.jpg')] bg-no-repeat bg-cover">
        <div className='flex w-full justify-end items-center gap-4 px-8 py-4 '>
          <p className="text-black text-xl font-bold mt-4">Alredy have an account ?</p>
        <Link href={'/login'} className="mt-6 bg-green-500 py-4 px-8 text-center  hover:transform hover:scale-105  transition-transform duration-300 font-bold text-xl rounded-full text-white">
            Log In            
          </Link>
        </div>
      </div>
    </div>
  );
}
