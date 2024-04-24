import MainPdf from "@/components/pdf/MainPdf";
import { SanityProduct } from "@/config/inventory";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function page() {
  const catalogo = await client.fetch<SanityProduct[]>(
    groq`*[_type == "catalogo"] [0]`
  );

  return (
    <div>
      <MainPdf catalogo={catalogo} />
    </div>
  );
}
