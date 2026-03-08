export default function Hero(){

  return(
    <section className="bg-yellow-200 border-b">

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-semibold mb-3 text-black">
          Simple Online Store
        </h2>

        <p className="text-gray-600 mb-6 text-bold animate-pulse">
          Browse products and shop easily.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-b-2xl hover:bg-gray-200 hover:text-black">
          Shop Now
        </button>
      </div>
    </section>
  )
}