import { Header } from './components/header';
import { Buttons } from './components/buttons'
import { Password } from './components/password';
import { Email } from './components/email';
import { RememberBut } from './components/rememberbut';


export default function LoginPage() {
  

  return (
    <div className="flex flex-col items-center bg-black min-h-screen space-y-10 min-w-full">
      {/* Header Login Page */}
      <Header />

      {/* Form Login Page */}
      <div className="flex flex-col items-center justify-center gap-8 w-400 ">
        <h1 className="font-bold text-neutral-50 text-5xl">Log in to Spotify</h1>

        {/*Buttons */}
        <Buttons />

        {/* White Line */}
        <div className="h-[1px] w-[600px] bg-white opacity-20" />

        {/*Input Credentials*/}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <Email />
          
          {/* Password */}
          <Password />

          {/* Remember Me */}
          <RememberBut />

          {/* Button Log In */}
          <button className="mt-6 bg-green-500 py-4 hover:transform hover:scale-105  transition-transform duration-300 font-bold text-xl rounded-full text-black">
            Log In
            {' '}
          </button>
        </form>
      </div>
    </div>
  );
}
