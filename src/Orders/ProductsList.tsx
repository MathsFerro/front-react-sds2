import { checkIsSelected } from "./helpers";
import { Product } from "./interfaces";
import { ProductCard } from "./ProductCard";

interface ProductsListProps {
  products: Product[]
  selectedProducts: Product[]
  onSelectProduct: (product: Product) => void
}

export function ProductsList({ products, onSelectProduct, selectedProducts }: ProductsListProps) {
  return(
    <div className="orders-list-container">
      <div className="orders-list-items">
        
        { products.map(product => (
          <ProductCard 
            key={product.id}
            product={product} 
            onSelectProduct={onSelectProduct} 
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        )) }
        
      </div>
    </div>
  )
}