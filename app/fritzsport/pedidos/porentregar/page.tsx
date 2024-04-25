import { getPedidos } from "@/actions/ProductosPagados/getProductosPagados";
import Pagos from "@/components/pedidos/Pagos";

export default async function page() {
  const pedidos = await getPedidos("porentrega");
  return <Pagos data={pedidos}></Pagos>;
}