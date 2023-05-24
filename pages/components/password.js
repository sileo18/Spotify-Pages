export function Password() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-semibold">Password</p>
      <input
        className="relative bg-transparent border text-lg border-neutral-50 border-opacity-50 rounded-sm w-[380px] px-5 py-4 text-white hover:border-opacity-100"
        type="email"
        placeholder="Password"
      />
    </div>
  );
}
