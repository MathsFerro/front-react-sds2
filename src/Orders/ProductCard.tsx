import { formatPrice } from './helpers'
import { Product } from './interfaces'

interface ProductCardProps {
  product: Product
  onSelectProduct: (product: Product) => void
  isSelected: boolean
}


export function ProductCard({ product, onSelectProduct, isSelected }: ProductCardProps) {
  return (
    <div 
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectProduct(product)}
    >
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