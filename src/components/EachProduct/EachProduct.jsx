
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EachProduct = () => {
    /* loading data of each product here with its specific id*/
    /* method-1 */
    const product = useLoaderData();
    /* method-2 (using UseParams) hook*/
    /* const product = useParams()

    const [product1, setProduct1] =useState()

    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${product.id}`)
        .then(res => res.json())
        .then(data => setProduct1(data))
    
    },[])
    console.log(product1)
 */
    console.log('this is', product)

    const { price, id, images, title, description, rating, stock, brand, thumbnail } = product;


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img className="h-52 rounded-xl" src={images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <h2 className="font-semibold underline">${price}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">In Stock: {stock}</div>
                        <div className="badge badge-outline bg-amber-100 text-black">{brand}</div>
                    </div>
                    {/* creating dynamic routes for each different id */}
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default EachProduct;