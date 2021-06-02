import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children }) => (
  <div className='categories'>
    <h3 className='categories__title'>My list</h3>
    {children}
  </div>
);

export default Categories;
