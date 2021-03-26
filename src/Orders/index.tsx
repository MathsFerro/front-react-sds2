import { useEffect, useState } from 'react'
import { fetchProducts } from '../service/api'
import { Product } from './interfaces'
import { OrderLocation } from './OrderLocation'
import { ProductsList } from './ProductsList'
import { StepsHeader } from './StepsHeader'
import './styles.css'

export function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  // utilizando fetch padrão do JS
  // useEffect(() => {
  //   fetch("http://localhost:8080/products")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setProducts(data)})
  // }, [])

  return(
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList products={products} />
        <OrderLocation />
      </div>
    </>
  )
}

// npm install @types/react-router-dom