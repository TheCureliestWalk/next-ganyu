import IButton from "@/components/Button";

export default function Page() {
  return (
    <div className="bg-white/30 border border-zinc-300 max-w-md mx-auto">
      <div className="border-b border-zinc-300 pl-4 pt-4">
        <h1 className="font-bold text-base mb-3">Login</h1>
      </div>
      <div className="p-4">
        <form action="#" className="space-y-2">
          <div>
            <label htmlFor="username" className="font-bold">
              Email / Username
            </label>
            <input
              name="username"
              type="text"
              className="p-4 w-full bg-white/30 border border-zinc-300"
              placeholder="john@doe.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="p-4 w-full bg-white/30 border border-zinc-300"
              placeholder="Your password"
            />
            <IButton text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
