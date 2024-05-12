"use client";
import { CardList } from "@/components/CardList";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import "98.css";

import Image from "next/image";

  
function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
     setTimeout(() => {
    setIsLoading(false)
  }, 2000);
  }, [])
  
 

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white relative">
          <Image alt="wall-paper" src={"/wallpaper.png"} sizes="100vw" fill />
          <Image
            alt="logo-svg"
            priority
            src={"/windows-logo.svg"}
            width={642.03}
            height={408.18}
            className="z-10 items-center"
            style={{position:'static'}}
          />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 -z-20">
      <CardList />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});