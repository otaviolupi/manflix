'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <div className="p-8 flex items-center relative h-[100vh] bg-[#151515]">
        <Image className="w-[100%] h-[100vh] absolute left-0 top-0 object-cover" src="/banner.png" width={1000} height={1000} alt="Banner" />
        <div className="w-full h-[100vh] absolute overlay-banner left-0 top-0"></div>
        <div className="px-[79px] absolute z-10 flex flex-col items-center">
          <h1 className="text-[79px] font-extrabold text-white mb-[16px] leading-[84px] text-center max-w-[70%] mt-0 mx-auto">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[24px] text-white mb-[32px] text-center max-w-[70%] mt-0 mx-auto">Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button className="bg-[#5E17EB] hover:bg-[#5E17EB] w-[50%] rounded-sm" type="submit">Claim your Singly</Button>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f5f9] h-[100vh]">

      </div>
    </div>
    
  )
}
