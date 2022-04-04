import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Products } from './components/home/Products';
import {getProducts, deleteProducts} from './services/products'
import { Button } from './components/customComponents/button/Button';


function App() {
  const [products, setProducts] = useState([])
  const [checked, setChecked] = useState([])

  useEffect(() => {
    const fetchProducts = async () =>{
      let res = await getProducts()
      setProducts(res.data)
    }
    fetchProducts()

  },[])

  const handleDelete = async () => {
    if(products.length > 0){
      let ids = checked.join(',')
      let response = await deleteProducts(ids)
      if(response.status===204){
        setProducts((prev)=>prev.filter((product)=>checked.includes(product.id)===false))
        setChecked([])
      }
    }
  }

  return (
    <>
      <Header  title='Products List'>
        <Link to='/addproduct' style={{ textDecoration: 'none' }}><Button styleType='success' text='ADD' /></Link>
        <Button clickHandler={handleDelete} id='delete-product-btn' styleType='danger' text='MASS DELETE' />
      </Header>
      <hr />
      <Products products={products} setCheck={setChecked} />
      <Footer />
    </>
  );
}

export default App;
