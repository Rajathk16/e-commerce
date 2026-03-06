 
 "use client";
 import { useRouter } from "next/navigation";
 export default function HeroSection({name}) {
    const router = useRouter();
  return (
 <div className="relative w-full h-[400px] flex flex-col items-center justify-center text-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10">
          <h1 className="text-6xl text-white  hover:text-yellow-300 font-bold mb-4">{name}</h1>
          <div className="flex px-10 text-white">
<h3 className="hover:text-red-500 cursor-pointer brightness-100 ml-4 font-bold" 
onClick={(e)=>{router.push("/")}}>home</h3>
<h3 className="font-bold  ">/{name}</h3>
</div>
        </div>
      </div >
  )}