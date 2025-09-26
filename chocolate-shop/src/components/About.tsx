function About() {
  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold text-stone-900 mb-8">
              Our Sweet Story
            </h2>
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
             ChocoDelights began as a small artisan
              workshop in the heart of Belgium. Our journey started with a simple dream: to create chocolates 
              that would bring pure joy to every moment.
            </p>
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              We source our cocoa beans directly from family-owned farms across Ecuador, Madagascar, and Venezuela, 
              building lasting relationships that ensure both exceptional quality and fair trade practices.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
               we continue to handcraft each chocolate using time-honored European 
              techniques, while constantly innovating with exciting new flavors and sustainable practices.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-stone-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 font-bold">🌱</span>
                  <span>100% sustainable and ethically sourced ingredients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 font-bold">👥</span>
                  <span>Supporting local cocoa farming communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 font-bold">🏆</span>
                  <span>Award-winning master chocolatiers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 font-bold">♻️</span>
                  <span>Eco-friendly packaging and zero waste production</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 font-bold">✨</span>
                  <span>Small batch crafting for ultimate freshness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🏅</div>
            <h4 className="text-xl font-bold text-stone-900 mb-2">Award Winning</h4>
            <p className="text-stone-600">International Chocolate Awards Gold Medal Winner 2024</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="text-xl font-bold text-stone-900 mb-2">Global Sourcing</h4>
            <p className="text-stone-600">Direct partnerships with farms in 12 countries worldwide</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h4 className="text-xl font-bold text-stone-900 mb-2">Master Crafted</h4>
            <p className="text-stone-600">Each piece individually crafted by certified chocolatiers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About