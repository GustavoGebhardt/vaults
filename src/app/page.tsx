"use client"

import HeaderPublic from "@/components/header-public";
import LogoImage from "@/components/logo-image";
import ThemeButton from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return(
    <>
      <HeaderPublic />
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 p-4">
        <LogoImage width={200} height={200} />
        <p className="font-medium text-center w-[700px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem eveniet repellendus nemo, nihil facilis aut! Eum nisi totam, illo et impedit id tempora nam aut deserunt fugit veniam velit itaque accusantium suscipit rerum, hic labore. Nostrum, alias consequatur. Nesciunt ullam, repellat possimus impedit doloremque earum laudantium beatae illum facere!</p>
        <Button variant={"outline"} size={"icon"}><ChevronsDown /></Button>
      </div>
    </>
  );
}
