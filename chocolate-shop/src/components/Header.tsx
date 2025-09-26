import { useState } from 'react'

interface HeaderProps {
  cartItemsCount: number
  onCartClick: () => void
}

function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-stone-900 text-stone-50 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🍫</div>
            <div>
              <h1 className="text-2xl font-bold">ChocoDelights</h1>
              <p className="text-xs  mt-1 text-stone-300">Premium Handcrafted</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-300 transition-colors font-medium">Home</a>
            <a href="#products" className="hover:text-amber-300 transition-colors font-medium">Products</a>
            <a href="#about" className="hover:text-amber-300 transition-colors font-medium">About</a>
            <a href="#testimonials" className="hover:text-amber-300 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors font-medium relative"
            >
              🛒 Cart ({cartItemsCount})
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button
              className="md:hidden text-stone-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-700">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
              <a href="#products" className="hover:text-amber-300 transition-colors">Products</a>
              <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-amber-300 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header