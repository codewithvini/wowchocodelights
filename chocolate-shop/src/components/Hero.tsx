function Hero() {
  return (
    <section id="home" className="relative py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="inline-block bg-amber-500 text-stone-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Handcrafted Chocolates
          </span>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Premium<br />
          <span className="text-amber-400">Chocolate</span><br />
          Experience
        </h2>
        
        <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          Indulge in our artisanal chocolate collection, crafted with the finest Belgian cocoa 
          and traditional European techniques. Each piece tells a story of passion, quality, and innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
  onClick={() => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Shop Collection
</button>
          {/* <button className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
            Our Story
          </button> */}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">5+</div>
            <div className="text-stone-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">10k+</div>
            <div className="text-stone-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">10+</div>
            <div className="text-stone-300">Unique Flavors</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero