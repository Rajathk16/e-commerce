"use client"
import Link from "next/link"
export default function Navbar(){
  return(
    <nav className="bg-yellow-300 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold text-black">
          ShopRaj
        </h1>
        <div className="flex gap-8  text-black text-md">

          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/login">Login</Link>

        </div>

      </div>

    </nav>
  )
}