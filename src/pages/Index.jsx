import React, {useEffect, useState} from "react";
import ItemListContainer from "../components/ItemListContainer";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const Index = () => {
const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "productos")

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
    })
  })
  return (
    <div>
      <ItemListContainer products={productsData} />
    </div>
  );
};

export default Index;
