import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductFormTemp from './ProductFormTemp';

const ProductManagement = () => {

  const [products ,setProducts] = useState([]);

  const handleAddProducts = newProduct =>{
    const newProducts = [...products, newProduct]
    setProducts(newProducts)
  }

  return (
    <div>
      <ProductFormTemp handleAddProducts={handleAddProducts}/>
      <ProductTable products={products}/>
    </div>
  );
};

export default ProductManagement;