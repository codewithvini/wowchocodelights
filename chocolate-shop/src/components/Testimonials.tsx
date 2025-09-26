function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      content:
        "Absolutely divine! The dark chocolate truffle is a masterpiece. You can taste the quality in every bite. ChocoDelights has ruined all other chocolates for me!",
      rating: 5,
      avatar: "👩‍🦰",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Corporate Client",
      content:
        "We've been ordering ChocoDelights for our company events for 3 years. The presentation is beautiful and our clients are always impressed. Outstanding service!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Wedding Planner",
      content:
        "The custom wedding favors were perfect! Every guest asked where we found such amazing chocolates. The attention to detail is incredible.",
      rating: 5,
      avatar: "👰",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Chocolate Enthusiast",
      content:
        "As someone who has tried chocolates from around the world, I can confidently say ChocoDelights rivals the best European chocolatiers. Exceptional quality!",
      rating: 5,
      avatar: "👨‍🍳",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            What Our Customers Say
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what chocolate lovers around
            the world think about our creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-stone-800 rounded-2xl p-6 hover:bg-stone-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-stone-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-stone-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <div className="bg-amber-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join 10,000+ Happy Customers!</h3>
            <p className="mb-6">Experience the magic of premium handcrafted chocolates</p>
            <button className="bg-white text-stone-900 px-8 py-3 rounded-xl font-bold hover:bg-stone-100 transition-colors">
              Order Your First Box
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonials;
