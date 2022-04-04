import React, { useState } from 'react'
import { TextInput } from './TextInput'
import { Furniture } from './Furniture'
import { Book } from './Book'
import { Dvd } from './Dvd'
import { formValidate } from '../../helpers/formValidate'
import { addProduct } from '../../services/products'
import { makeDescription } from '../../helpers/makeDescription'
import { Button } from '../customComponents/button/Button'
import { Alert } from '../customComponents/alert/Alert'

import { useNavigate } from 'react-router'
import { SelectBox } from '../customComponents/selectBox/SelectBox'

export const Form = () => {
    const [productType, setProductType] = useState('dvd')
    const [errors, setErrors] = useState([])
    const [typeError, setTypeError] = useState(false)
    let navigate = useNavigate()

    const selectedComponent = productType==='dvd'?<Dvd errors={errors}/>:
                              (productType==='book'?<Book errors={errors}/>
                              :<Furniture errors={errors}/>)


    const handleSubmit = async (e) => {
        e.preventDefault()
        let formErrors = formValidate(e, productType)
        setErrors(formErrors.emptyErrors)
        setTypeError(formErrors.typeErrors)
        if(formErrors.emptyErrors.length ===0 && formErrors.typeErrors===false){
            const {sku, name, price} = e.target
            let description = makeDescription(productType, e)
            let res = null
            try{
              res=  await addProduct(sku.value, name.value, String(parseFloat(price.value)), description)
              if (res.status===201) {
                navigate('/')
                }
            }catch(err) {
                alert('duplicate sku please enter another sku')
            }
            
        }
    }
    
    const handleChange = (e) => {
        console.log(e);
        setProductType(e.target.value)
    }

  

    return (
        <>
        {typeError?<Alert content='Please Enter Valid types' id='error' type='error' />:''}
        <form id='product_form' autoComplete='off' onSubmit={(e)=>handleSubmit(e)} style={{height:'calc(98vh - 180px)',overflow:'auto',width:'100%'}}>
            <TextInput inputId='sku' errors={errors} inputName='SKU' errorText='Please Enter a value' helpText=''/>
            <TextInput inputId='name' errors={errors} inputName='Name' errorText='Please Enter a value' helpText=''/>
            <TextInput inputId='price' errors={errors} inputName='Price ($)' errorText='Please Enter a value' helpText=''/>
                <SelectBox
                    id='productType'
                    labelName='Type Switcher'
                    value={productType}
                    changeHandler={handleChange}
                >
                    <option value='dvd'>DVD</option>
                    <option value='book'>Book</option>
                    <option value='furniture'>Furniture</option>
                </SelectBox>
            
            {selectedComponent}
            <Button type='submit' styleType='success' text='Save' />

        </form>
        </>
    )
}
