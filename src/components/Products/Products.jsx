import { key } from "localforage";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";


const Products = () => {
    /* data fetching method 1: receive data here using useLoaderData hook */
    /* we can directly destructure product data using {products} or we can do this method(products.product) */
    const {products} = useLoaderData();
    
    const {images, title, description} = {products}
    /* data fetching method 2: we can load data directly here using useState and useEffect
    example: given below*/

    /* const [products,setProducts] = useState([])
    useEffect(() => {
        fetch ('https://dummyjson.com/products')
        .then(res => res.json()
        .then(data => setProducts(data.products))
    )
    },[]); */
    //console.log(products);
    
    return (
        /* we need loop through products, to get details of each product separately  */
        <div className="grid grid-cols-4 gap-4">
            {products?.map(product => <ShowProduct key={product.id} product={product}></ShowProduct>)}    
        </div>
    );
};

export default Products;