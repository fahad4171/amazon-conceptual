import { Link, useNavigate } from "react-router-dom";

const ShowProduct = ({ product }) => {
    const { price, id, images, title, description, rating, stock, brand } = product;

    /* method-2: view product details:  let the situation is, if user is logged in the clicking on "view details" button will show products details page, else it will take user home page */

    /* const navigate = useNavigate();
    const handleProductNavigate = () =>{
        
        const user = false; //this mean if user is logged in 

        if(user){
            navigate(`/products/${id}`);
        } 
        else {
            navigate('/');
        }

    }; */

    return (
        <div>
            <div className="card w-72 h-full bg-base-100 shadow-xl">
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
                    {/* method-1: view product details  (simple)*/}
                    {/* creating dynamic routes for each different id */}
                    {<Link to={`/products/${id}`}><button className="btn btn-primary">View Details</button></Link>}

                    {/* method-2:  view product details  (conditional-using useNavigate)*/}
                    {/* <button onClick={handleProductNavigate} className="btn btn-primary">View Details</button> */}

                </div>
            </div>
        </div>
    );
};

export default ShowProduct;