import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children }) => (
  <div className='categories'>
    <h3 class='categories__title'>My list</h3>
    {children}
  </div>
);

export default Categories;
