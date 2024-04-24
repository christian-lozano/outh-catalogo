export const fetchCache = "force-no-store";
export const revalidate = 0; // seconds
export const dynamic = "force-dynamic";

import { getPedidos } from "@/actions/ProductosPagados/getProductosPagados";
import Pagos from "@/components/pedidos/Pagos";

export default async function page() {
  const pedidos = await getPedidos("pagado");

  return <Pagos data={pedidos}></Pagos>;
}
