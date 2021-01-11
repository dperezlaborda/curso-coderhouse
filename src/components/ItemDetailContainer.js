import React, { useState } from 'react';
import ItemDetail from './ItemDetail';

const getItems = () => {

}



const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    return (
        <div>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer;
