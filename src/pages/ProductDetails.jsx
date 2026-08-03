import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error));
    }, [id]);
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-6">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p className="text-muted">
                        {product.category}
                    </p>
                    <h4 className="text-success">
                        ${product.price}
                    </h4>
                    <p>
                        ⭐ {product.rating}
                    </p>
                    <p>
                        Brand: {product.brand}
                    </p>
                    <p>
                        Stock: {product.stock}
                    </p>
                    <p>
                        Discount: {product.discountPercentage}%
                    </p>
                    <p>
                        {product.description}
                    </p>
                    <button className="btn btn-outline-success">
                        ❤️ Add to Wishlist
                    </button>
                    <button className="btn btn-success">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;