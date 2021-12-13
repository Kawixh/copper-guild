export const Sidebar = (props) => {
  return (
    <div className="flex flex-col rounded-3xl bg-rose-200 min-h-screen p-6 min-w-full">
      <div className="transition duration-200 p-3 hover:bg-white/75 hover:text-rose-800 cursor-pointer rounded-2xl font-semibold">Dashboard</div>
      <div className="transition duration-200 p-3 hover:bg-white/75 hover:text-rose-800 cursor-pointer rounded-2xl font-semibold">Animation</div>
      <div className="transition duration-200 p-3 hover:bg-white/75 hover:text-rose-800 cursor-pointer rounded-2xl font-semibold">Home</div>
      <div className="transition duration-200 p-3 hover:bg-white/75 hover:text-rose-800 cursor-pointer rounded-2xl font-semibold">Profile</div>
      <div className="transition duration-200 p-3 hover:bg-white/75 hover:text-rose-800 cursor-pointer rounded-2xl font-semibold order-last">Settings</div>
    </div>
  )
}