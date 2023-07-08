import React from "react";
import CardComponent from "./cardStuff/CardComponent";

const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem 10rem",
      }}
    >
      {products.map((product) => {
        return <CardComponent key={product.id} products={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
