import React, { useState } from 'react';

const ProductFormTemp = ({handleAddProducts}) => {
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const Name = e.target.productName.value;
        const Price = e.target.productPrice.value;
        const Quantity = e.target.productQuantity.value;

        // console.log(Name,Price,Quantity);

        //validation
        if(Name.length === 0){
            setError('Please provide a Product Name!');
            return;
        }
        else if(Price.length === 0){
            setError('Please set a Price!')
            return;
        }
        else if(Price < 0 ){
            setError('Price cannot be negative!')
            return;
        }
        else{
            setError('');
        }

        const newProduct = {
            Name,
            Price,
            Quantity
        }

        // console.log(newProduct);
        // if(!error)
        {
        handleAddProducts(newProduct)
        }
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

            <p style={{fontWeight: 'ExtraBold', color: 'darkred'}}>
                {error}
                </p>
        </div>
    );
};

export default ProductFormTemp;