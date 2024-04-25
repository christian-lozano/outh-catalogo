import React from "react";

import { useCart } from "react-use-cart";
export default function ExportAll({ products }) {
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

    products.map((el) =>
      addItem({
        id: el._id,
        sku: el.sku,
        tallas: el.tallascatalogo,
        name: el.name,
        imagenes: el.imagescatalogo ? el.imagescatalogo : undefined,
        title: el.name,
        image: el.images ? el.images[0].asset?._ref : undefined,
        sku: el.sku,
        price: el.priceecommerce,
        pricemayorista: el.pricemayorista,
        slug: el.slug,
        genero: el.genero,
        marca: el.marca,
        categorias: el.categories,
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
