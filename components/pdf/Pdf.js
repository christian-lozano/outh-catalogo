import { urlForImage } from "@/sanity/lib/image";
import { Document, Text, Page, Image, View } from "@react-pdf/renderer";

import PdfPage from "@/components/pdf/PdfPage";
//add pdf
export default function PDF({ items, catalogo }) {
  let productosCantidad = items.map((el) => {
    let productos = {
      id: el.id,
      sku: el.sku,
      tallas: el.tallas,
      name: el.name,
      img: el.image,
      title: el.name,
      imagecatalogo: el.imagenes,
      sku: el.sku,
      price: el.price,
      pricemayorista: el.pricemayorista,
      slug: el.slug,
      genero: el.genero,
      marca: el.marca,
      categoria: el.categorias && el.categorias,
    };

    return productos;
  });

  let dat = catalogo.catalogo.map((el) => ({
    marca: el.marca,
    imgheader: el.imgheader,
    imgfooter: el.imgfooter,
    imgprice: el.imgprice,
    imagenPortada: el.imgmarca.asset._ref,

    generos: [
      {
        imgPortadaGenero: el.imghombre.asset._ref,
        genero: "hombre",
        categorias: el.categorias,
      },
      {
        imgPortadaGenero: el.imgmujer.asset._ref,
        genero: "mujer",
        categorias: el.categorias,
      },
      {
        imgPortadaGenero: el.imgninos.asset._ref,
        genero: "niños",
        categorias: el.categorias,
      },
      {
        imgPortadaGenero: el.imgunisex.asset._ref,
        genero: "unisex",
        categorias: el.categorias,
      },
    ],
  }));

  const dataFiltros = {
    data: dat,
  };

  return (
    <>
      <Document>
        {dataFiltros.data.map((marca) => (
          <>
            {productosCantidad.filter((el) => el.marca === marca.marca).length >
              0 && (
              <>
                <Page>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={urlForImage(marca.imagenPortada).url()}
                  />
                </Page>

                {marca.generos.map((genero) => (
                  <>
                    {productosCantidad.filter(
                      (el) =>
                        el.genero === genero.genero && el.marca === marca.marca
                    ).length > 0 && (
                      <>
                        <Page>
                          <Image
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            src={urlForImage(genero.imgPortadaGenero).url()}
                          />
                        </Page>

                        {genero.categorias.map((categoria, i) => (
                          <>
                            {productosCantidad.filter(
                              (el) =>
                                el.genero === genero.genero &&
                                el.marca === marca.marca &&
                                el.categoria === categoria.category
                            ).length > 0 && (
                              <>
                                <Page key={i}>
                                  <Image
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                    }}
                                    src={urlForImage(
                                      categoria.imgcategoria.asset._ref
                                    ).url()}
                                  />
                                </Page>
                                {productosCantidad
                                  .filter(
                                    (el) =>
                                      el.genero === genero.genero &&
                                      el.marca === marca.marca &&
                                      el.categoria === categoria.category
                                  )
                                  .map((el) => (
                                    <>
                                      <PdfPage
                                        catalogo={marca}
                                        key={el.id}
                                        producto={el}
                                      />
                                    </>
                                  ))}
                              </>
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </>
                ))}
              </>
            )}
          </>
        ))}

        {/* nike */}
        {/* {productosCantidad.filter((el) => el.marca === "nike").length > 0 && (
          <>
            <Page>
              <Image src={urlForImage(catalogo.imgnike.asset._ref).url()} />
            </Page>
            {productosCantidad.filter(
              (el) => el.genero === "hombre" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imghombre.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "hombre" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
            {productosCantidad.filter(
              (el) => el.genero === "mujer" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imgmujer.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "mujer" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
            {productosCantidad.filter(
              (el) => el.genero === "niños" && el.marca === "nike"
            ).length > 0 && (
              <>
                <Page>
                  <Image
                    src={urlForImage(catalogo.imgninos.asset._ref).url()}
                  />
                </Page>
                {productosCantidad
                  .filter((el) => el.genero === "niños" && el.marca === "nike")
                  .map((el) => (
                    <PdfPage key={el.id} producto={el} />
                  ))}
              </>
            )}
          </>
        )} */}
      </Document>
    </>
  );
}
