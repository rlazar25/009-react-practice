import { useEffect, useState } from "react";
import productsServices from "../services/productsServices";
import { Link } from "react-router-dom";

function ProductPage() {

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        productsServices.getAllProductsService()
            .then(res => {
                setAllProducts(res.data.products)
                setLoading(true)

            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h2 className="title">Products Page</h2>
            {loading ? <div className="flex flex-wrap gap-4 justify-center">

                {allProducts.map(product => {
                    return (
                        <div className="border w-[200px] p-2 flex flex-col" key={product.id}>
                            <h2>{product.title}</h2>
                            <h2>{product.price}</h2>

                            <Link className="bg-slate-800 hover:bg-slate-600 px-4 py-1 rounded text-white self-center" to={`/product/${product.id}`} >More</Link>
                        </div>
                    )
                })}
            </div> : <h2>Loading...</h2>}

        </div>
    )
}

export default ProductPage;