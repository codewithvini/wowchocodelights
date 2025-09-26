function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🍫</span>
              <div>
                <h3 className="text-2xl font-bold">ChocoDelights</h3>
                <p className="text-stone-400 text-sm">Premium Handcrafted</p>
              </div>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed max-w-md">
              Creating moments of pure joy through exceptional chocolate experiences. 
              From bean to bar, every step is crafted with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors">📘</a>
              <a href="#" className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors">📷</a>
              <a href="#" className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors">🐦</a>
              <a href="#" className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors">📌</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3 text-stone-300">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4 text-stone-300">
              <div className="flex items-start space-x-3">
                <span className="text-amber-400">📍</span>
                <div>
                  <p className="font-semibold">ChocoDelights</p>
                  <p>123 Chocolate Avenue<br />Sweet City, SC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">📞</span>
                <div>
                  <p>(555) 123-CHOCO</p>
                  <p className="text-sm text-stone-400">Mon-Sat: 9AM-8PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">✉️</span>
                <p>hello@chocodelights.com</p>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-stone-400 text-sm">
              <p>&copy; 2025 ChocoDelights. All rights reserved.</p>
              <p className="mt-2">Made with ❤️ and lots of chocolate in Belgium</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-stone-400 md:justify-end">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer