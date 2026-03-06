"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../firebase/firebase";

export default function Signup() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async () => {
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      alert("Account created successfully");

      router.push("/login");   // go to login page
    }
    catch(error){
      console.log(error.message);
    }
  };

  const googleSignup = async () => {
    try{
      await signInWithPopup(auth,googleProvider);

      router.push("/"); // redirect after signup
    }
    catch(error){
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">

      <div className="bg-slate-800 p-10 rounded-xl shadow-xl w-[400px]">

        <h1 className="text-2xl font-bold text-white text-center mb-8">
          Create your account
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Sign up
          </button>

          <button
            onClick={googleSignup}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded"
          >
            Sign up with Google
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={()=>router.push("/login")}
              className="text-indigo-400 cursor-pointer"
            >
              Login
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}