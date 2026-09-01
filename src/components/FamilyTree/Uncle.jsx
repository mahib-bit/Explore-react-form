import React from 'react';
import Cousin from './Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Jane'></Cousin>
                <Cousin name='Doe'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;