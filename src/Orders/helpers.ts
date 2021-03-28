import { Product } from "./interfaces";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some(item => item.id === product.id);
}

// Usando API internacional (Intl) para formatar o preço
export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2 // padrão 
  })

  return formatter.format(price)
}