
import ActivarVerPagos from "./ActivarVerPagos";
import VerProductoPedidos from "./VerProductoPedidos";
// import { urlForImage } from "@/sanity/lib/image";
export default function Pagos({ data }) {
  let hash = {};
  let pedidos = data.filter(function (current) {
    let exists = !hash[current.id_payer];
    hash[current.id_payer] = true;
    return exists;
  });
  return (
    <>
      {pedidos.map((el) => (
        <tr
          key={el.id}
          class=" bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
        >
          <td class="px- py-3 text-sm">
            <div className="flex justify-center w-2/4 ">
              <ActivarVerPagos>
                <VerProductoPedidos productView={el}></VerProductoPedidos>
              </ActivarVerPagos>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center text-sm">
              <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  class="object-cover w-full rounded-full"
                  src={
                    el.productos[0].picture_url
                      ? el.productos[0].picture_url
                      : ""
                  }
                  alt=""
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                ></div>
              </div>

              <div>
                <p class="font-semibold">{el.nombres}</p>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {el.apellidos}
                </p>
              </div>
            </div>
          </td>

          <td class="px-4 py-3 text-sm">{el.telefono}</td>

          <td class="px-4 py-3 text-sm">{el.documento}</td>
          <td class="px-4 py-3 text-sm">{el.departamento}</td>
          <td class="px-4 py-3 text-sm">{el.distrito}</td>
          <td class="px-4 py-3 text-sm">{el.provincia}</td>

          <td class="px-4 py-3 text-xs">
            <span
              class={`px-2 py-1 font-semibold leading-tight   rounded-full dark:text-black  `}
            >
              {el.estado}
            </span>
          </td>
          <td class="px-4 py-3 text-sm">
            S/{Number(el.cart_total).toFixed(0)}
          </td>
          <td class="text-sm w-[10rem]">{String(el._updatedAt)}</td>
        </tr>
      ))}
    </>
  );
}
