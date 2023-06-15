import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { Data } from "../json/DataFile";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const filterCategory = Data.filter(
    (Element) => Element.clasificacion === categoryId
  );

  return (
    <div>
      <ItemListContainer products={filterCategory} />
    </div>
  );
};

export default Category;
