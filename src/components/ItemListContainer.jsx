import React from "react";
import CardComponent from "./cardStuff/CardComponent";

const ItemListContainer = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <CardComponent key={product.id} products={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
