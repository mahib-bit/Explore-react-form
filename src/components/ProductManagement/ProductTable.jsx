import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products :{products.length}</h3>

            <table>
                <thead>
                    <tr style={{flexDirection:'row',alignItems:'center',margin:'10px',padding:'10px'}}>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{product.Quantity}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;