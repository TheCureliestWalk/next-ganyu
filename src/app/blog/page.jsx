'use client'

async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Cannot fetch data...");
  }
  return res.json();
}

export default function Page() {
  return (
    <div className="bg-white/30 border border-zinc-300 grid grid-flow-col grid-rows-3 gap-4">
      <div className="p-4 col-span-1">

      </div>
    </div>
  );
}
