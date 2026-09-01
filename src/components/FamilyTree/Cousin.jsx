import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';
import Friend from './Friend';

const Cousin = ({name,asset}) => {

    const newAsset = useContext(AssetContext)
    
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Jane' && <Special asset={asset}></Special>
            }
            {
                name === 'Mizar' && <Special asset={asset}></Special>
            }
            {
                name === 'Alcor' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;