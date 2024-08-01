import axios from "axios";

class productsServices{
    static getAllProductsService = () => axios.get('https://dummyjson.com/products');
}

export default productsServices;