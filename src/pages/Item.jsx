import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { Data } from "../json/DataFile";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();
  const itemFilterId = Data.filter((Element) => Element.id === parseInt(itemId));
  return (
    <div>
      <ItemDetailContainer products={itemFilterId} />
    </div>
  );
};

export default Item;
