import axios from "axios"

const PRODUCTS_URL = "https://www.shido.dev/listing/products"

export const getProducts = async () => {
    let products = await axios.get(PRODUCTS_URL)
    return products
}

export const deleteProducts = async (ids) => {
    return await axios.delete(PRODUCTS_URL,{
        data:{
            id:ids
        }
    })
}

export const addProduct = async (sku, productName, price, description) => {
    return await axios.post(PRODUCTS_URL,{
            sku:sku,
            name:productName,
            price: price,
            description: description
    })
}