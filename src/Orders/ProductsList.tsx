import { Product } from "./interfaces";
import { ProductCard } from "./ProductCard";

interface ProductsListProps {
  products: Product[]
}

export function ProductsList({ products }: ProductsListProps) {
  return(
    <div className="orders-list-container">
      <div className="orders-list-items">
        
        { products.map(product => (
          <ProductCard key={product.id} product={product} />
        )) }
        
      </div>
    </div>
  )
}