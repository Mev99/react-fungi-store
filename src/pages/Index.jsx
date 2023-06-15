import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { Data } from "../json/DataFile";

const Index = () => {
  return (
    <div>
      <ItemListContainer products={Data} />
    </div>
  );
};

export default Index;
