"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "react-use-cart";
import { Trash2 } from "lucide-react";
export default function TituloCart() {
  const { emptyCart } = useCart();
  return (
    <div className="mx-auto    w-full">
      <div className="flex justify-around p-10 z-[999] bg-black  w-full">
        {" "}
        <h1 className="text-3xl text-white font-bold  sm:text-4xl">Catalogo</h1>
        <Button className="text-white " onClick={() => emptyCart()}>
          <span> Borrar Todo</span>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
