import React from 'react'
import styles from './Product.Module.scss'


export const Product = ({productData, setCheck}) => {


    const checkHandler = () => {
        setCheck((prev)=> prev.includes(productData.id) ? prev.filter(i => i !== productData.id) : [ ...prev, productData.id ])
    }

    return (
        <div className={styles['product']}>
                <input type='checkbox' className={styles['delete-checkbox']} onClick={()=>checkHandler()}/>
                {Object.keys(productData).map((key)=>key!=='id'?
                <h6 key={`${productData[key]}-${productData['id']}`} >
                    {key=='price'?`${productData[key]} $`:productData[key]}
                </h6>:'')}

        </div>
    )
}
