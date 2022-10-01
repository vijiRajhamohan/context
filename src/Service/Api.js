import axios from 'axios';
const prodApi ="https://fakestoreapi.com/products";

export const FetchData =()=>{
const getProducts = async () => {
    const response = await axios.get(`${prodApi}`);
    return response;
}
    return { getProducts };
}
