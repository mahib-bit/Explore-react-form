import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Mizar'></Cousin>
                <Cousin name='Alcor'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;