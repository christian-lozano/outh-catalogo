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

    products.map((products) =>
      addItem({
        id: products._id,
        sku: products.sku,
        tallas: products.tallascatalogo,
        name: products.name,
        imagenes: products.imagescatalogo ? products.imagescatalogo : undefined,
        title: products.name,
        image: products.images ? products.images[0].asset?._ref : undefined,
        sku: products.sku,
        price: products.priceecommerce,
        pricemayorista:
          tipoprecio === "emprendedor"
            ? products.priceemprendedor
            : products.pricemayorista,

        tipoprecio: tipoprecio,
        slug: products.slug,
        genero: products.genero,
        marca: products.marca,
        categorias: products.categories,
        tipo: products.tipo,
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
