const products = [
  {
    id: 1,
    name: "Everyday Backpack",
    price: "$49",
    description: "Simple, durable, and perfect for school, work, or travel.",
    gradient: "from-violet-600 via-indigo-600 to-cyan-500",
  },
  {
    id: 2,
    name: "Desk Organizer",
    price: "$24",
    description: "Keeps your workspace neat with a minimal premium look.",
    gradient: "from-orange-500 via-red-500 to-yellow-400",
  },
  {
    id: 3,
    name: "Daily Bottle",
    price: "$19",
    description: "Reusable bottle with a clean design for everyday use.",
    gradient: "from-sky-500 via-emerald-500 to-purple-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div className="text-xl font-bold tracking-wide">NovaMarket</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Shipping across the USA
          </div>
        </header>

        <div className="grid gap-8 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              Modern React storefront
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              A clean store for selling everyday finds in the USA.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Built as a modern Next.js storefront with product cards, premium
              styling, and a clear purchase flow. Easy to expand with cart,
              checkout, and admin features.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-500"
              >
                Browse products
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Start selling
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                Fast checkout
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                Mobile first
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                SEO ready
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Store setup</h2>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                React + Next.js
              </span>
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              Ideal structure: homepage, products, product details, cart,
              checkout, shipping policy, returns, and contact page. Use Stripe
              for payments and connect a CMS or backend later.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div>Product pages</div>
              <div>Stripe checkout</div>
              <div>Easy expansion</div>
            </div>
          </div>
        </div>

        <section id="products" className="grid gap-6 pb-16 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
            >
              <div className={`h-48 bg-gradient-to-br ${product.gradient}`} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-xl font-bold">{product.price}</span>
                </div>
                <p className="mt-3 text-slate-300">{product.description}</p>
                <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 pb-16 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">1. Product pages</h3>
            <p className="mt-3 text-slate-300">
              Add descriptions, gallery images, sizes, colors, and reviews.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">2. Payments</h3>
            <p className="mt-3 text-slate-300">
              Connect Stripe Checkout or another payment provider.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">3. Growth</h3>
            <p className="mt-3 text-slate-300">
              Later you can add SEO, email capture, and analytics.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Ready to launch</h2>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              Customizable
            </span>
          </div>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            This is a strong base for an American online store. Next step: add
            real product data, cart state, Stripe checkout, shipping pages, and
            deploy to Vercel.
          </p>
        </section>

        <footer className="py-10 text-sm text-slate-400">
          © 2026 NovaMarket. Built for a modern US e-commerce launch.
        </footer>
      </section>
    </main>
  );
}