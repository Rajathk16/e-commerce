"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth,email,password);
      console.log(user);

      router.push("/"); // redirect to homepage

    }
    catch(error){
      console.log(error.message);
    }
  };

  const googleLogin = async () => {
    try{
      const result = await signInWithPopup(auth,googleProvider);
      console.log(result.user);

      router.push("/"); // redirect after google login

    }
    catch(error){
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">

      <div className="bg-slate-800 p-10 rounded-xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-semibold text-white text-center mb-8">
           Login to your account
        </h1>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-gray-300">Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
          >
            Login
          </button>

          <div className="text-center text-gray-400 text-sm">
            Or continue with
          </div>

          <button
            onClick={googleLogin}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded"
          >
            Sign in with Google
          </button>

          <div className="text-center">
            <p className="text-center text-gray-400 text-sm mt-4">
  Don't have an account?{" "}
  <span
    onClick={()=>router.push("/signup")}
    className="text-indigo-400 cursor-pointer"
  >
    Sign up
  </span>
</p>
          </div>

        </div>
      </div>
    </div>
  );
}