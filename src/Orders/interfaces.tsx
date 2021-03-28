export interface Product {
  id: number
  name: string 
  price: number
  description: string 
  imageUri: string
}

export interface OrderLocationData {
  latitude: number
  longitude: number
  address: string
}

export interface OrderPayload extends OrderLocationData {
  address: string
  products: ProductId[]
}

export interface ProductId {
  id: number
}
