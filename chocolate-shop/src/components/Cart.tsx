
interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemoveItem: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}
export interface CartItem {
  id: number
  name: string
  price: number
  emoji: string
  quantity: number
}

function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900">Your Cart ({getTotalItems()})</h2>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Your cart is empty</h3>
              <p className="text-stone-600 mb-6">Add some delicious chocolates to get started!</p>
              <button
                onClick={onClose}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-stone-50 rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{item.emoji}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-stone-900">{item.name}</h4>
                      <p className="text-stone-600">₹{item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="bg-stone-200 hover:bg-stone-300 w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-stone-200 hover:bg-stone-300 w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      🗑️
                    </button>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="font-bold text-stone-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-stone-900">Total:</span>
              <span className="text-2xl font-bold text-stone-900">₹{getTotalPrice().toFixed(2)}</span>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full border-2 border-stone-300 text-stone-700 py-3 rounded-xl font-semibold hover:bg-stone-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
            
            <div className="mt-4 text-center text-sm text-stone-500">
              <p>🚚 Free shipping on orders over ₹50</p>
              <p>🔒 Secure checkout with SSL encryption</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart