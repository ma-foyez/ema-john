import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams();
    const products = fakeData.find(product=> product.key === productKey);
    return (
        <div>
            <Products showAddToCard={false} products={products}></Products>
        </div>
    );
};

export default ProductDetails;