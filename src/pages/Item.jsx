import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Item = () => {
  const [productsData, setProductsData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = doc(db, "productos", itemId);

    getDoc(productsCollection).then((snapshot) => {
      setProductsData(
        ([{ id: snapshot.id, ...snapshot.data() }]))
        ;
      });
    });
    
    
  return (
    <div>
      <ItemDetailContainer products={productsData} />
    </div>
  );
};

export default Item;
