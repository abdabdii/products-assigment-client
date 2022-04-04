import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from './components/addproducts/Form'
import { Button } from './components/customComponents/button/Button'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'


export const AddProduct = () => {

    return (
        <>
           <Header title='Add Product'>
               <Link to='/' style={{ textDecoration: 'none' }}><Button styleType='danger' text='CANCEL' /></Link>
           </Header>
           <hr />
           <Form  />
           <Footer />
        </>
        
    )
}
