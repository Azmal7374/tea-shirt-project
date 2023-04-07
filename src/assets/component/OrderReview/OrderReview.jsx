import React from 'react';
import{useLoaderData}from "react-router-dom";

const OrderReview = () => {

const tshirts = useLoaderData()
console.log(tshirts);

    return (
        <div>
            <h2>Review page{tshirts.length}</h2>
        </div>
    );
};

export default OrderReview;