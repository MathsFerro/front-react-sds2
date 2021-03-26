import { Product } from './interfaces'

interface ProductCardProps {
  product: Product
}

// Usando API internacional (Intl) para formatar o preço
function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2 // padrão 
  })

  return formatter.format(price)
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">
        {product.name}
      </h3>
      <img src={product.imageUri} alt="" className="order-card-image"/>
      <h3 className="order-card-price">
        {formatPrice(product.price)}
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}