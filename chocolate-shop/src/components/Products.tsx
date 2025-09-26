import { useState } from "react";
import type { Product } from "../types";

interface ProductsProps {
  onAddToCart: (id: number, name: string, price: number, image: string) => void;
}

function Products({ onAddToCart }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const products: Product[] = [
    // Premium
    {
      id: 1,
      name: "Cadbury Bournville Classic",
      price: 359.0,
      originalPrice: 450.0,
      description:
        "Luxurious 85% Belgian dark chocolate with silky ganache and edible gold leaf",
      image: "/cadbury chocolate with single-origin cocoa.webp",
      category: "Premium",
      featured: true,
    },
    {
      id: 2,
      name: "Cadbury Celebration Pack",
      price: 479.0,
      description:
        "Smooth dark chocolate with vanilla bean and a hint of cognac",
      image: "/cadbury celebrations pack.jpg",
      category: "Premium",
      featured: true,
    },

    // Classic
    {
      id: 3,
      name: "Cadbury Temptation Chocolate",
      price: 449.0,
      description:
        "Creamy Swiss milk chocolate in heart shapes, perfect for gifting",
      image: "/cadbury temptation.jpg",
      category: "Classic",
    },
    {
      id: 4,
      name: "Almond Chocolate Coated Rocks with Irish Coffee Flavour",
      price: 299.0,
      description: "Rich milk chocolate with gooey salted caramel center",
      image: "/Almond Chocolate Coated Rocks with Irish Coffee Flavour.webp",
      category: "Classic",
    },

    // Nutty
    {
      id: 5,
      name: "Dairy Milk Desserts Brownie Chocolate",
      price: 450.0,
      description: "Roasted Italian hazelnuts in smooth milk chocolate praline",
      image: "/dairy milk desserts brownie.jpg",
      category: "Nutty",
    },
    {
      id: 6,
      name: "Dairy Milk Silk Plum Cake Chocolate",
      price: 399.0,
      description: "Crunchy roasted almonds in rich dark chocolate clusters",
      image: "/Dairy mik silk.jpg ",
      category: "Nutty",
    },

    // Coffee
    {
      id: 7,
      name: "Fabelle Truffle Collection",
      price: 899.0,
      description: "Premium dark chocolate Crafted for Chocolate Connoisseurs",
      image: "/fabelle truffle collection.avif",
      category: "Coffee",
    },
    {
      id: 8,
      name: "KOPIKO",
      price: 449.0,
      description:
        "Milk chocolate infused with cappuccino cream and coffee bean dust",
      image: "/KOPIKO .webp",
      category: "Coffee",
    },

    // Tropical
    {
      id: 9,
      name: "SMOOR Pistachio Kunafa Chocolate",
      price: 799.0,
      originalPrice: 599.0,
      description:
        "Tropical coconut flakes in white chocolate with almond center",
      image: "/SMOOR Pistachio Kunafa Chocolate .jpg",
      category: "Tropical",
      featured: true,
    },
    {
      id: 10,
      name: "Barquillo Premium Red Velvet Chocolate",
      price: 429.0,
      description:
        "White chocolate with freeze-dried raspberries and hibiscus petals",
      image: "/Barquillo Premium Red Velvet Chocolate.jpg",
      category: "Tropical",
    },

    // Floral
    {
      id: 11,
      name: "Cacaosuyo Chocolate",
      price: 429.0,
      description:
        "Milk chocolate with lavender-infused caramel and shortbread",
      image: "/cacaosuyo chocolate.jpg",
      category: "Floral",
    },
    {
      id: 12,
      name: "Chocholik Belgium Chocolate",
      price: 479.0,
      description:
        "White chocolate infused with rose water and roasted almond flakes",
      image: "/Chocholik Belgium Chocolate.jpg",
      category: "Floral",
    },
  ];

  const categories = [
    "All",
    "Premium",
    "Classic",
    "Nutty",
    "Coffee",
    "Tropical",
    "Floral",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 9);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-6">
            Our Chocolate Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium chocolates, each
            crafted with passion and the finest ingredients from around the
            world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium ${
                selectedCategory === category
                  ? "border-amber-500 text-amber-600"
                  : "border-stone-200 hover:border-amber-500 hover:text-amber-600"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-stone-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              {product.featured && (
                <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ⭐ FEATURED
                </div>
              )}

              {/* Image */}
              <div className="mb-6 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 mx-auto object-cover rounded-full transition-transform group-hover:scale-110"
                />
              </div>

              <div className="text-xs text-amber-600 font-semibold mb-2 uppercase tracking-wide">
                {product.category}
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {product.name}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-stone-900">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                <button
                  onClick={() =>
                    onAddToCart(
                      product.id,
                      product.name,
                      product.price,
                      product.image
                    )
                  }
                  className="bg-stone-900 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          <div className="text-center mt-16 ml-4 col-span-full">
            {!showAll && filteredProducts.length > 9 && (
              <button
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                onClick={() => setShowAll(true)}
              >
                View All Products
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
