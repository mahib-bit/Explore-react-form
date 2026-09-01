import React from 'react';

const ProductFormTemp = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const Name = e.target.productName.value;
        const Price = e.target.productPrice.value;
        const Quantity = e.target.productQuantity.value;

        // console.log(Name,Price,Quantity);
        const newProduct = {
            Name,
            Price,
            Quantity
        }

        console.log(newProduct);
    };

    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name="productName" placeholder='Product Name' />
            <br />
            <input type="text" name="productPrice" placeholder='Product Price' /> 
            <br/>
            <input type="text" name="productQuantity" placeholder='Product Quantity' />
            <br/>
            <button type="submit">Add Product</button>
            </form>
        
        </div>
    );
};

export default ProductFormTemp;