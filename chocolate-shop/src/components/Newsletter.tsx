import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Sweet Deals & New Flavors
        </h2>
        <p className="text-xl text-amber-100 mb-8">
          Subscribe to our newsletter and be the first to know about new
          chocolate creations, exclusive offers, and behind-the-scenes stories
          from our chocolaterie.
        </p>

        {isSubscribed ? (
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">
              Welcome to the Family!
            </h3>
            <p className="text-stone-600">
              Check your email for a special welcome gift.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl bg-black border-0 text-stone-900 placeholder-stone-500 focus:ring-4 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl mb-2">📧</div>
            <div className="text-white font-semibold">Weekly Recipes</div>
            <div className="text-amber-100 text-sm">
              Chocolate dessert ideas
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎁</div>
            <div className="text-white font-semibold">Exclusive Offers</div>
            <div className="text-amber-100 text-sm">
              Subscriber-only discounts
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🍫</div>
            <div className="text-white font-semibold">New Releases</div>
            <div className="text-amber-100 text-sm">
              First access to flavors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
