import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Footer } from '../Footer'
import { fetchProducts, saveOrder } from '../service/api'
import { checkIsSelected } from './helpers'
import { OrderLocationData, Product } from './interfaces'
import { OrderLocation } from './OrderLocation'
import { OrderSummary } from './OrderSummary'
import { ProductsList } from './ProductsList'
import { StepsHeader } from './StepsHeader'
import './styles.css'

export function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
  
  const totalPrice = selectedProducts.reduce((current, sum) => {
    return current + sum.price
  }, 0)

  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product)
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! N°${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }
  
  

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
        <ProductsList 
          products={products} 
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation 
          onChangeLocation={location => setOrderLocation(location)} 
        />
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit={handleSubmit}
        />
        <Footer />
      </div>
    </>
  )
}

// npm install @types/react-router-dom