import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Category from "../pages/Category";
import Item from "../pages/Item";
import NavBar from "../components/NavBar";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
