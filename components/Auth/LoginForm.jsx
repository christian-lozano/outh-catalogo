"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Credenciales invalidas");
        return;
      }

      router.replace("fritzsport/pedidos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-slate-100">
      <div className="shadow-2xl  border-x-1  p-5 rounded-lg border-t-2 border-black">
        <h1 className="text-xl font-bold my-4">Inicio Sesión</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-black text-white font-bold cursor-pointer px-6 py-2">
            Iniciar sesión
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className="py-2"></div>

          {/* <Link className="text-sm mt-3 text-right" href={"/register"}>
            No tienes Una Cuenta? <span className="underline">Register</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}
