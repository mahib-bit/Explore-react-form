import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Uncle = ({asset}) => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Jane'></Cousin>
                <Cousin name='Doe'></Cousin>
                <button onClick={() => setMoney(money + 2000)}>Add Money</button>
            </section>
        </div>
    );
};

export default Uncle;