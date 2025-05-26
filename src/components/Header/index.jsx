// components/Header.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full px-6 md:px-16 py-6 flex justify-between items-center bg-foreground">
      <Image src="/images/logo.svg" width={200} height={100}/>
      <nav className="hidden md:flex space-x-6 text-primary font-medium">
        <Link href="#">Home</Link>
        <Link href="#">Experiences</Link>
        <Link href="#">Guide</Link>
        <Link href="#">Itineraries</Link>
        <Link href="#">FAQ</Link>
      </nav>
      <Button className="bg-primary text-white rounded-xl cursor-pointer hover:bg-green-800">Book a call</Button>
    </header>
  )
}
