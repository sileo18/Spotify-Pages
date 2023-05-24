export function Email() {
  return (
    <div className="flex flex-col gap-2">
            <p className="text-white text-lg font-semibold">Email or username</p>
            <input
              className="bg-transparent border text-lg  border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
              type="email"
              placeholder="Email or username"
            />
          </div>
          
  )
}