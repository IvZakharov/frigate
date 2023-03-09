import styles from "./CatalogFilters.module.scss";
import React from "react";
import Filter from "@/components/CatalogFilters/FIlter/Filter";

const CatalogFilters: React.FC = () => {
  return (
    <div className={styles.catalogFilters}>
      <div className={"container"}>
        <div className={"flex items-center justify-center gap-4"}>
          <Filter title={"Length"} filtersArr={["7’11”", "7’12”", "7’13”"]} />
          <Filter
            title={"Width"}
            filtersArr={["22 1/8”", "21 7/8”", "21 5/8”"]}
          />
          <Filter
            title={"Thickness"}
            filtersArr={["2  11 / 16”", "2  11 / 16”", "2  11 / 16”"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
