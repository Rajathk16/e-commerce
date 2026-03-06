"use client";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";


export default function Home() {
  const router = useRouter();
  const PMenu=[
    {
      name:"Hamburger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F9.png&w=1080&q=75",
      price:12
    },
    {
      name:"Chicken Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F10.png&w=1080&q=75",
      price:16
    },
    {
      name:"Cheese Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75",
      price:25
    },
    {
      name:"Bacon Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F12.png&w=1080&q=75",
      price:18
    }
  ]

  const Ldish = [
    {
      name: "Classic Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F16.png&w=1080&q=75",
      desc: "Ricotta / goat cheese / beetroot",
      sugg: "Must Try",
      price: 35,
    },
    {
      name: "Cheese Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F17.png&w=1080&q=75",
      desc: "Atlantic / chips / salad / tartare",
     sugg: "Normal",
      price: 42,
    },
    {
      name: "Grilled Chicken",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F18.png&w=1080&q=75",
      desc: "Truffle mash / pepper sauce.",
     sugg: "Normal",
      price: 28,
    }
  ];

   const Lmdish = [
    {
      name: "Margherita Pizza",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F13.png&w=1080&q=75",
      desc: "Ricotta / goat cheese / beetroot",
      sugg: "Must Try",
      price: 15,
    },
    {
      name: "Pepperoni Pizza",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F14.png&w=1080&q=75",
      desc: "Atlantic / chips / salad / tartare",
     sugg: "New Item",
      price: 29,
    },
    {
      name: "BBQ Chicken Pizza",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F15.png&w=1080&q=75",
      desc: "Truffle mash / pepper sauce.",
     sugg: "Normal",
      price: 45,
    }
  ];
  return (
    <div className="min-h-screen dark:text-white dark:bg-stone-900 bg-white text-black">
   <section className="fixed top-0 left-0 right-0 z-50">
     <Navbar/>
   </section>

      <div className="flex items-center justify-between md:px-20  pt-30">
        <div className="flex flex-col gap-4"></div>
        <div className="relative">
          <img
            src="https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg"
            className="md:w-[1300px] md:h-[700px] rounded-2xl nd:object-cover"
          />
          <div className="absolute top-10 left-10 flex flex-col md:justify-center items-start md:pl-24"> <h2 className="text-red-500 text-2xl font-semibold">Super Delicious</h2>
          <h1 className="md:text-6xl font-extrabold dark:text-white text-white">Burger</h1></div>
          <div className="absolute  md:top-10 right-10 md:mt-0 mt-[-233px] bg-red-500 text-white rounded-lg px-2 md:px-6 md:py-4 text-center">
            <p className="text-sm">up to</p>
            <h3 className="md:text-3xl text-sm md:font-bold">50% OFF</h3>
          </div>
        </div>
      </div>
     <section className="md:px-20 px-8 py-24 dark:text-white dark:bg-stone-900 bg-white text-black">
  <div className="text-center mb-12">
    <p className="text-red-500 font-semibold  mb-2">── ABOUT US ──</p>
    <h2 className=" dark:text-white md:text-4xl text-3xl font-bold ">
      The best burgers offer a <br /> combination of tastes.
    </h2>
  </div>

  <div className="flex flex-col md:flex-row gap-10">
    <div className=" flex md:flex-row flex-col gap-6">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F11.jpg&w=1200&q=75"
        className="rounded-2xl md:w-1/2 md:h-[620px] object-cover"
      />
      <div className="flex flex-col justify-between md:w-1/2 gap-6">
        <div className="bg-red-500 text-white rounded-2xl flex flex-col justify-center items-center p-10 md:h-[300px]">
          <h3 className="text-6xl font-bold">18+</h3>
          <p className="  dark:text-white text-lg mt-4 font-medium">Types Of Burger</p>
        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F10.jpg&w=1200&q=75"
           className="rounded-2xl w-full h-[300px] object-cover"
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center gap-8">
      <p className=" dark:text-white text-gray-700">
        New had happen unable uneasy. Drawings can followed improved out sociable not.
        Earnestly so do instantly pretended. See general few civilly amiable pleased
        account carried. Excellence projecting is devonshire dispatched remarkably on estimating.
      </p>

      <div className="flex flex-col gap-6">
        <div className="border rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F21.png&w=640&q=75" className="w-full m-10"
            />
          </div>
          <div>
            <h4 className=" dark:text-white text-xl font-semibold">Online Food Delivery</h4>
            <p className=" dark:text-white text-gray-600">
              Excellence projecting is devonshire dispatched remarkably on estimating.
            </p>
          </div>
        </div>

        <div className="border rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F22.png&w=640&q=75"
            className="w-full m-10"
            />
          </div>
          </div>
          <div>
            <h4 className=" dark:text-white text-xl font-semibold">Authentic Food</h4>
            <p className=" dark:text-white text-gray-600">
              Regularity projecting is devonshire dispatched remarkably on estimating.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-12 dark:text-white dark:bg-stone-800 bg-gray-200 text-black text-center">
  <p className="text-red-500 font-semibold tracking-widest mb-2">── OUR SPECIAL ──</p>
  <h2 className="  text-4xl font-bold mb-12">Popular Burger</h2>

  <div className="flex justify-center gap-10 flex-wrap">
    {PMenu.map((element) =>{
            return(
                <PMenuCard
              key={element.name}
                name={element.name}
                imgurl={element.imgurl}
                 price={element.price}
              
                />      
            )
        }
    )}
   
  </div>
</section>
<section className="bg-stone-900 flex md:flex-row flex-col justify-center items-center gap-10 py-16  md:px-0 px-5 ">
  <div className="relative md:w-[500px] w-[400px] h-[250px] rounded-3xl ">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F1.jpg&w=1920&q=75"
      className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl "
    />
    <div className="absolute inset-0 bg-red-900"></div>
    <div className="relative z-10 text-white flex flex-col justify-center items-start h-full px-8 space-y-3">
      <p className=" dark:text-white italic text-lg">Eat Sleep And</p>
      <h2 className=" dark:text-white text-4xl font-bold ">DREAM<br />BURGER</h2>
      <button className=" dark:text-white dark:bg-black bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white">
        Accept This Deal
      </button>
      <div className="absolute top-5 right-8 text-xl md:mt-0 mt-3 font-bold">$35.00</div>
    </div>
  </div>

  <div className="relative md:w-[500px] w-[400px] h-[250px] rounded-3xl ">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F2.jpg&w=1920&q=75"
      className="absolute inset-0 w-full h-full object-cover "
    />
    <div className="absolute inset-0 bg-yellow-300"></div>
    <div className="absolute top-5 right-5 bg-white text-red-600 font-bold rounded-xl px-3 py-1 text-center z-10">
      <div className="text-2xl">50</div>
      <div className="text-sm">OFF</div>
    </div>
    <div className="relative z-10 text-white flex flex-col justify-center items-start h-full px-8 space-y-3">
      <p className=" dark:text-white italic text-lg">Best deal ever</p>
      <h2 className=" dark:text-white text-4xl font-bold ">LUGER<br />BURGER</h2>
      <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black">
        Accept This Deal
      </button>
    </div>
  </div>
</section>

 





<section className="py-20 px-12 items-center dark:bg-stone-900  bg-white text-center">
  <p className="text-red-500 font-semibold  mb-2">── POPULAR MENU ──</p>
  <h2 className=" dark:text-white text-4xl font-bold mb-12">Latest Food Items</h2>
<div className=" dark:bg-stone-900 flex md:flex-row flex-col justify-center items-center bg-white">
      <div className="flex flex-col gap-6   ">
        {Ldish.map((item) => (
          <LMenuCard
            key={item.name}
             imgurl={item.imgurl}
            name={item.name}
            desc={item.desc}
            sugg={item.sugg}
            price={item.price}
           
          />
        ))}
      </div>
       <div className="flex flex-col gap-6   ">
        {Lmdish.map((item) => (
          <LMenuCard
            key={item.name}
             imgurl={item.imgurl}
            name={item.name}
            desc={item.desc}
            sugg={item.sugg}
            price={item.price}
           
          />
        ))}
      </div>
    </div>
  </section> 

  <section>
      <div className="bg-black md:h-[700px] h-[1000px] w-full flex md:flex-row flex-col   font-bold text-white ">
    <div className="flex md:flex-row flex-col items-center">
        <div className="flex flex-col w-[400px] md:w-[800px] md:ml-20">
          <div className=" dark:text-white italic font-light text-2xl md:text-4xl mb-5 mt-5">Super Combo Offer</div>
            <div className=" dark:text-white font-bold md:text-7xl text-4xl text-gray-50 md:w-[500px] ">Burger and sea fish curry combo</div>
            <div className="text-gray-300  dark:text-white font-normal mt-5 md:w-[500px] ">Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</div>
              <div className="bg-red-500 md:w-[200px] w-[150px] h-[34px] md:h-[60px] rounded-[50px] flex justify-center items-center text-white font-bold md:text-xl mt-10 cursor-pointer hover:bg-amber-600 "  onClick={(e)=>{router.push("/shop")}}>Accept the Deal</div>    
        </div>
        <div className="flex  flex-col mt-10 md:mt-0">
          <div className="w-[190px] h-[170px] bg-red-500 rounded-[100px] flex mb-[-90px] md:mb-[-100px] md:ml-0 ml-30 text-4xl text-amber-100">
          <p className="text-black  dark:text-white font-light line-through mt-12 md:mt-15 ml-7 md:ml-4">$80</p>
<p className="text-white font-bold mt-12 md:mt-15 ml-2">$50</p>

          </div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F12.jpg&w=1920&q=75" className="md:w-[450px] md:h-[450px]  rounded-full md:p-0 p-5 md:ml-10"/>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F13.png&w=1080&q=75" className="md:w-[200px] md:h-[200px] w-[150px] md:ml-80 ml-60 mt-[-100px] md:mt-[-150px]"/>
</div></div>
  </div>
  </section>



  <section>
    <WH/>
  </section>
  <section>
    <Customer/>
  </section>
  
   <section className="py-20 px-16 dark:text-white dark:bg-stone-900 bg-white text-black text-center">
  <p className="text-red-500 font-semibold tracking-widest mb-2">── NEWS & BLOG ──</p>
  <h2 className="text-4xl font-bold mb-12  dark:text-white">Our Latest News & Blog</h2>

  <div className="flex justify-center gap-10 flex-wrap">
    {[
      {
        img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75",
        date: "24",
        month: "DEC",
        title: "Picked up a Brussels burger Sprouts with ham",
        link:"Read more"
      },
      {
        img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75",
        date: "18",
        month: "NOV",
        title: "This prefabricated passive house is highly sustainable",
        link:"Read more"
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white dark:bg-stone-800 shadow-lg rounded-xl  w-[450px] relative"
      >
        <div className="relative">
          <img src={item.img} className="w-full h-[280px] object-cover" />
          <div className="absolute bottom-0 right-5 bg-red-600 text-white font-bold px-4 py-2 rounded-t-md text-center">
            <div className="text-xl">{item.date}</div>
            <div className="text-sm">{item.month}</div>
          </div>
        </div>

        <div className="p-6 text-left">
          <p className="  dark:text-yellow-300 text-gray-600 text-sm mb-2">
            BY <span className="font-semibold dark:text-yellow-300 text-black">MD SOHAG</span> <span className="text-red-600">•</span> BURGER, FOOD
          </p>
          <h3 className="  dark:text-white text-xl font-bold hover:text-red-600">{item.title}</h3><br/>
            <h3 className="text-xl font-bold text-red-600 cursor-pointer"  onClick={(e)=>{router.push("/blog")}}>{item.link}</h3>
        </div>
      </div>
    ))}
  </div>
</section > 
<section className="md:px-20 md:border-b-2  md:border-gray-500  ">
  <Aboutus/>
</section>
<section className="w-full text-white">
  <Footer/>

</section>






  
   </div>

  
  );
}