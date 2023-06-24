export default function Page() {
  return (
    <div className="flex gap-4">
      <div className="bg-white/30 border border-zinc-300 flex flex-col items-center">
        <h1 className="my-3 px-2 font-bold text-lg mb-2 text-center">Quest/Bounty Tracker</h1>
        <p>Bounty Type</p>
        <ul>
          <li><a href="">All</a></li>
          <li><a href="">Gambit</a></li>
          <li><a href="">Crucible</a></li>
          <li><a href="">Strike (Vanguard)</a></li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">

      <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Gambit</h1>
        </div>
        <div className="p-4">
          <p>Motes 5 times</p>
        </div>
      </div>

      <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Que Pro Quo</h1>
        </div>
        <div className="p-4">
          <p>Fucking done the Gambit.</p>
        </div>
      </div>

      <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Authentication</h1>
        </div>
        <div className="p-4">
          <p>To get your infomation, you need to login first.</p>
        </div>
      </div>

            <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Authentication</h1>
        </div>
        <div className="p-4">
          <p>To get your infomation, you need to login first.</p>
        </div>
      </div>

            <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Authentication</h1>
        </div>
        <div className="p-4">
          <p>To get your infomation, you need to login first.</p>
        </div>
      </div>

      </div>
    </div>
  );
}
