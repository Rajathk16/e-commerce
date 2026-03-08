export default function ProductCard({product}){

  return(
    <div className="bg-white border rounded p-4">

      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-3"
      />

      <h3 className="font-medium">
        {product.name}
      </h3>

      <p className="text-gray-600 mb-3">
        ₹{product.price}
      </p>

      <button className="bg-black text-white px-4 py-1 text-sm rounded-2xl hover:bg-gray-400 hover:text-white">
        Add to Cart
      </button>

    </div>
  )
}