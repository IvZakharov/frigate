import BackLink from "@/components/Shared/BackLink/BackLink";
import ProductGallery from "@/components/Product/Gallery/ProductGallery";
import StarRating from "@/components/Product/StarRating/StarRating";
import React from "react";
import ReviewButton from "@/components/Product/ReviewButton/ReviewButton";
import ProductCategories from "@/components/Product/Categories/ProductCategories";
import ProductInfo from "@/components/Product/Info/ProductInfo";
import ProductColors from "@/components/Product/Colors/ProductColors";
import ProductPhins from "@/components/Product/Phins/ProductPhins";
import ProductVolume from "@/components/Product/Volume/ProductVolume";
import ProductAttributes from "@/components/Product/Attributes/ProductAttributes";
import ProductDetails from "@/components/Product/Details/ProductDetails";
import ProductPrice from "@/components/Product/Price/ProductPrice";

const product = {
  id: 0,
  title: "Chilli Rare Board",
  status: "sale",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  imagesArr: [
    "/images/products/board.png",
    "/images/products/board.png",
    "/images/products/board.png",
    "/images/products/board.png",
  ],
  rating: 4,
  categories: ["Softboard", "board", "Soft"],
  colors: ["blue", "red", "yellow"],
  phins: [
    "/images/icons/phins/1.svg",
    "/images/icons/phins/2.svg",
    "/images/icons/phins/3.svg",
  ],
  volume: ["33"],
  attributes: [
    { name: "Length", variants: ["7’11”", "7’11”", "7’11”"] },
    { name: "Width", variants: ["22  1/8”", "22  1/8”", "22  1/8”"] },
    {
      name: "Thickness",
      variants: ["2  11 / 16”", "2  11 / 16”", "2  11 / 16”"],
    },
  ],
  price: { actual: "900", old: "1160" },
  details: [
    { title: "8’ x 22 1/2” x 2 3/4”", image: "/images/icons/details/1.svg" },
    {
      title:
        "Epoxy construction- Lighter, stronger and more bouyant than traditional fiberglass",
      image: "/images/icons/details/2.svg",
    },
    {
      title: "CNC Machine Shaped EPS Foam (hand finished)",
      image: "/images/icons/details/3.svg",
    },
    {
      title: "Flat through the middle, double concave at the tail",
      image: "/images/icons/details/4.svg",
    },
    { title: "Beveled Rail", image: "/images/icons/details/5.svg" },
    {
      title:
        '2+1 FCS compatible fins included (8" center fin and 2 side bite fins)',
      image: "/images/icons/details/6.svg",
    },
  ],
};

export default function ProductPage() {
  return (
    <>
      <div className={"container relative py-16"}>
        <div className={"absolute z-10"}>
          <BackLink slug={"/catalog"} />
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2"}>
          <div>
            <ProductGallery images={product.imagesArr} />
            <div
              className={
                "flex justify-end flex-col items-end pr-8 w-full transform -translate-y-14 relative z-10 gap-5 md:flex-row md:translate-y-0"
              }
            >
              <StarRating defaultRating={product.rating} />
              <ReviewButton />
            </div>
          </div>

          <div>
            <div className={"mb-3"}>
              <ProductCategories categories={product.categories} />
            </div>
            <div className={"mb-10"}>
              <ProductInfo
                title={product.title}
                description={product.description}
              />
            </div>
            <div className={"mb-10"}>
              <h4 className={"productCatTitle mb-1"}>Colors</h4>
              <p className={"text-sm mb-4"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ProductColors colors={product.colors} />
            </div>
            <div className={"mb-10"}>
              <h4 className={"productCatTitle mb-4"}>Type of phins</h4>
              <ProductPhins phins={product.phins} />
            </div>
            <div className={"mb-4"}>
              <h4 className={"productCatTitle mb-1.5"}>Volume</h4>
              <ProductVolume volume={product.volume} />
            </div>
            <div className={"mb-10"}>
              <ProductAttributes attributes={product.attributes} />
            </div>

            <div
              className={
                "fixed bottom-0 left-0 z-20 w-full py-3 px-4 background md:relative"
              }
            >
              <ProductPrice price={product.price} status={product.status} />
            </div>

            <div className={"mb-10"}>
              <h4 className={"productCatTitle mb-4"}>Product details:</h4>
              <ProductDetails details={product.details} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
