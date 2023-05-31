import React from "react";
import ItemListButtons from "./ItemListButtons";



const ItemListContainer = ({text, text2}) => {

  const greeting = () => {
    console.log(text)
  }

  const greeting2 = () => {
    console.log(text2)
  }

  return (
    <ItemListButtons callback={greeting} segundoCallback={greeting2}/>
  );
};

export default ItemListContainer;
