export interface CartItem {
  id: number
  name: string
  price: number
  emoji: string
  quantity: number
}

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  description: string
  image: string  // <-- changed from emoji
  category: string
  featured?: boolean
}
