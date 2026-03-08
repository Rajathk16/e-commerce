"use client"

import Navbar from "./components/navbar"
import Hero from "./components/hero"
import ProductCard from "./components/productcard"
import Footer from "./components/footer"

export default function Home() {

  const products = [
    { id:1, name:"Running Shoes", price:2499, image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRu3Aa3Idq3WVxfnrzGu1lfTED2ZMXL3ubA0eZVg27TUr1oAEVeTbgIt2Dcr0Imd9pkkXzGq5Xod_InnnlIAdsz6FXozQ_XUxcilPfI2Kk-gKJN0rCdP81QDu0&usqp=CAc" },
    { id:2, name:"Casual T Shirt", price:799, image:"/shirt.jpg" },
    { id:3, name:"Smart Watch", price:3999, image:"/watch.jpg" },
    { id:4, name:"Backpack", price:1299, image:"/bag.jpg" }
  ]
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <Hero/>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}