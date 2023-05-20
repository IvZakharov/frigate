import Title from "@/components/Shared/Title/Title";
import CatalogFilters from "@/components/CatalogFilters/CatalogFilters";
import { products } from "@/data/products";
import ProductCard from "@/components/Product/Card/ProductCard";
import CtaCard from "@/components/Cta/CtaCard";
import React from "react";

export default function Catalog() {
  return (
    <>
      <div className={"container mt-16 mb-7 md:mt-8 md:mb-8 xl:mt-20 xl:mb-20"}>
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

          <div className={"md:hidden"}>
            {products.length % 2 !== 0 ? <CtaCard /> : null}
          </div>

          <div className={"hidden md:block lg:hidden"}>
            {products.length % 3 !== 0 ? <CtaCard /> : null}
          </div>

          <div className={"hidden lg:block"}>
            {products.length % 4 !== 0 ? <CtaCard /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
