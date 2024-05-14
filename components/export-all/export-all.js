import React from "react";

import { useCart } from "react-use-cart";
export default function ExportAll({ products, tipoprecio }) {
  const { addItem } = useCart();


  const addToCatalogo = () => {
    // toast({
    //   title: `${products.name})`,
    //   description: "Producto Agregado al Catalogo",
    //   action: (
    //     <Link href={"/catalogo"}>
    //       <Button variant={"link"} className="gap-x-5 whitespace-nowrap">
    //         <span>Ver Catalogo Editable</span>
    //         <ArrowRight className="h-5 w-5" />
    //       </Button>
    //     </Link>
    //   ),
    // });
    products
      .filter((product) => product.stock > 0)
      .map((products) =>
        addItem({
          id: products._id,
          price: products.price,
          products,
          tipoprecio: tipoprecio,
          pricemayorista:
            tipoprecio === "emprendedor"
              ? products.priceemprendedor
              : products.pricemayorista,
        })
      );
  };
  return (
    <div className="flex w-full justify-center items-center p-5">
      <button
        className=" uppercase bg-black text-white p-3 rounded-xl"
        onClick={addToCatalogo}
      >
        Agregar Todo
      </button>
    </div>
  );
}
