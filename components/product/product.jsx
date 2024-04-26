import React, { useEffect, useState } from "react";

import { urlForImage } from "@/sanity/lib/image";
import { useCart } from "react-use-cart";

export default function Product({ products, generoSku = false, tipoprecio }) {
  const [stock, setStock] = useState();
  const { addItem } = useCart();
  const [cliente, setCliente] = useState(false);
  useEffect(() => {
    setCliente(true);
    if (!products.tallas) {
      setStock(false);
    } else {
      setStock(products.tallas.every((el) => el.stock === 0));
    }
  }, []);

  const addToCart = () => {
    console.log(tipoprecio);
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
    });
  };

  return (
    <>
      <div className="p-1 border-[1px] border-gray-300">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg     group-hover:opacity-75 ">
          {products.imgcatalogomain && (
            <img
              width={2000}
              height={2000}
              className="relative"
              src={urlForImage(
                products.images ? products.images[0].asset?._ref : undefined
              ).url()}
              alt=""
            />
          )}

          {products.descuento && (
            <div className="absolute right-0 top-4 bg-black px-3 py-1">
              <div className=" mt-1 text-xs text-white ">
                {stock ? (
                  <div>Agotado</div>
                ) : (
                  <span> -{products.descuento} %</span>
                )}
              </div>
            </div>
          )}
        </div>
        {generoSku && (
          <div className="flex items-center justify-between ">
            <h2 className="mt-4 font-medium capitalize">
              {products.marca} - {products.genero}
            </h2>
            <h5 className="mt-4 text-xs font-medium">Sku: {products.sku}</h5>
          </div>
        )}
        <h3 className="mt-2 text-sm font-extrabold uppercase xl:text-base">
          {products.name}
        </h3>
        <h3 className="mt-2 text-sm font-medium uppercase xl:text-sm">
          Categoría:{products.categories ? products.categories : ""}
        </h3>
        <p className="mt-2 font-semibold">
          Tallas:
          {products.tallascatalogo}
        </p>
        <div className="flex">
          {/* <span className="mr-2 mt-2 font-semibold text-[#767677] line-through">
            S/{products.priceecommerce}
          </span> */}
          <p className="mt-2 font-semibold">
            Precio Retail: S/
            {products.priceecommerce && products.priceecommerce.toFixed(2)}
          </p>
        </div>
        <p className="mt-2 font-semibold">
          Precio {tipoprecio === "emprendedor" ? "Emprendedor" : "Mayorista"}:
          S/
          {tipoprecio === "emprendedor"
            ? products.priceemprendedor.toFixed(2)
            : products.pricemayorista.toFixed(2)}
        </p>
        <div className="w-full flex justify-center mt-3 bg-black  text-white">
          {cliente && (
            <button type="button" className="w-full p-3" onClick={addToCart}>
              Agregar al Catalogo
            </button>
          )}
        </div>
      </div>

      {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}

      {/* <button
        onClick={() => alert("producto")}
        className="button-0 absolute z-50 flex items-center justify-center rounded-full  text-center"
      >
        <svg
          className=" icon icon--plus"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.125 10.875V18H10.375V10.875H18V9.625H10.375V2H9.125V9.625H2V10.875H9.125Z"
          ></path>
        </svg>
      </button> */}
    </>
  );
}
