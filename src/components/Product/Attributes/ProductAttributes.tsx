import styles from "./ProductAttributes.module.scss";
import React from "react";
import Dropdown from "@/ui/Dropdown/Dropdown";
import { DropdownProps } from "@/@types/dropdownProps";

type ProductAttributesProps = {
  attributes: DropdownProps[];
};

const ProductAttributes: React.FC<ProductAttributesProps> = ({
  attributes,
}) => {
  return (
    <div className={"flex gap-4"}>
      {attributes.map((obj, idx) => (
        <Dropdown
          name={obj.name}
          variants={obj.variants}
          key={idx + obj.name}
        />
      ))}
    </div>
  );
};

export default ProductAttributes;
