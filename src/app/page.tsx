'use client'

import Image from "next/image";
import IButton from "../components/Button";
import { Button } from 'antd';
export default function Home() {
  return (
    <div className="grid grid-rows-3 md:grid-flow-col gap-4">
      <div className="row-span-3 bg-white/30 p-4 border border-zinc-300 flex flex-col items-center">
        <Image
          className="mb-2 ganyu-img"
          src="/ganyu.png"
          width={128}
          height={128}
          alt="Ganyu"
        />
        <h3 className="font-bold text-2xl">Her Name is</h3>
        <h1 className="font-bold tracking-wide text-4xl text-sky-500">
          ~Ganyu~
        </h1>
        <small className="tracking-wide text-sm">
          She is pout when you make her disappoint.
        </small>
      </div>

      <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">Authentication</h1>
        </div>
        <div className="p-4">
          <p>To get your infomation, you need to login first.</p>
          <Button type="default" href="https://www.bungie.net/en/OAuth/Authorize?client_id=44772&response_type=code" className="mt-2">Login</Button>
        </div>
      </div>

      <div className="bg-white/30 border border-zinc-300">
        <div className="border-b border-zinc-300 pl-4 pt-4">
          <h1 className="font-bold text-base mb-3">News</h1>
        </div>
        <div className="p-4">
          <p>~ There is no news now. Please come back and check regulary.</p>
        </div>
      </div>
    </div>
  );
}
