import { XCircle } from "lucide-react";
import ActivarVerPagos from "./ActivarVerPagos";
import VerProductoPedidos from "./VerProductoPedidos";
// import { urlForImage } from "@/sanity/lib/image";
export default function Pago({ product }) {
  return (
    <>
      <tr
        key={product.id}
        className=" bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
      >
        <td className="px- py-3 text-sm">
          <div className="flex justify-center w-2/4 ">
            <ActivarVerPagos>
              <VerProductoPedidos productView={product}></VerProductoPedidos>
            </ActivarVerPagos>
          </div>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full rounded-full"
                src={
                  product.productos[0].picture_url
                    ? product.productos[0].picture_url
                    : "http://via.placeholder.com/2000x2000"
                }
                alt="test"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>

            <div>
              <p className="font-semibold">{product.nombres}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {product.apellidos}
              </p>
            </div>
          </div>
        </td>

        <td className="px-4 py-3 text-sm">{product.telefono}</td>

        <td className="px-4 py-3 text-sm">{product.documento}</td>
        <td className="px-4 py-3 text-sm">{product.departamento}</td>
        <td className="px-4 py-3 text-sm">{product.distrito}</td>
        <td className="px-4 py-3 text-sm">{product.provincia}</td>

        <td className="px-4 py-3 text-xs">
          <span
            class={`px-2 py-1 font-semibold leading-tight   rounded-full dark:text-black  `}
          >
            {product.estado}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          S/{Number(product.cart_total).toFixed(2)}
        </td>
        <td className="text-sm w-[10rem]">{String(product._updatedAt)}</td>
      </tr>
    </>
  );
}
