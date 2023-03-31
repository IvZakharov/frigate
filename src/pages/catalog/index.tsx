import Title from "@/components/Shared/Title/Title";
import CatalogFilters from "@/components/CatalogFilters/CatalogFilters";
import { products } from "@/data/products";
import ProductCard from "@/components/Product/Card/ProductCard";
import CtaCard from "@/components/Cta/CtaCard";

export default function Catalog() {
  return (
    <>
      <div className={"container py-16 md:pt-8 md:pb-8"}>
        <Title variant={"h1"}>Catalog</Title>
      </div>
      <CatalogFilters />

      <div className={"container"}>
        <div
          className={
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 pb-20 md:gap-3"
          }
        >
          {products.map((product, idx) => (
            <ProductCard
              title={product.title}
              status={product.status}
              images={product.images}
              price={product.price}
              length={product.length}
              thickness={product.thickness}
              key={idx}
              slug={"/catalog/slug"}
            />
          ))}
          <CtaCard />
        </div>
      </div>
    </>
  );
}
