import React from 'react'
import { Product } from './Product'


export const Products = ({products, setCheck}) => {
    return (
        <div  style={{height:'calc(98vh - 180px)', overflow:'auto',display:'flex',flexWrap:'wrap' }}>
            {products.length > 0 ?products.map((product)=><Product productData={product} key={product.id} setCheck={setCheck} />):""}
        </div>
    )
}
