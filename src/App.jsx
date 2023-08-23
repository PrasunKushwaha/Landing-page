import React from "react";

function App() {
  return (
    <>
      <div class="bg-[url('bg-image.jpg')] w-full h-screen bg-no-repeat bg-cover bg-fixed">
        <img src="logo.png" className="w-32 pt-4 pl-6" />
        <h1 className="pt-20 text-6xl font-bold text-center text-orange-200 ">
          Mouth Watering Pizza That You Cannot Ressist!
        </h1>
        <h2 className="pt-10 text-3xl text-center text-orange-200">
          India's No.1 Pizza Brand Science 1995.
        </h2>
        <h4 className="pt-8 pb-24 text-center text-orange-200">
          get 50% OFF on your first 3 orders.
        </h4>
        <div className="flex justify-center">
          <button className="px-4 py-2 text-2xl text-orange-100 bg-red-400 rounded-full hover:text-red-400 hover:bg-orange-100">
            Order Now
          </button>
        </div>
      </div>

      <div className="p-4 my-32 rounded-md shadow-xl bg-amber-50 mx-36">
        <div className="flex justify-between mx-20 mt-28">
          <img
            className="rounded w-72"
            src="https://i.pinimg.com/564x/c2/10/18/c21018563bdfdd869cb7735094cd1c7b.jpg"
          />
          <div>
            <h1 className="mt-6 ml-6 text-6xl font-bold text-red-500">
              Fast Delivery!
            </h1>
            <p className="mt-4 ml-6 mr-12 text-2xl font-semibold text-orange-500">
              Hungry for a quick and delicious fix? Our speedy pizza delivery
              brings the taste of heaven to your door, faster than you can say
              'cheese!
            </p>
          </div>
        </div>

        <div className="flex justify-between mx-20 mt-52">
          <div>
            <h1 className="mt-6 ml-6 text-6xl font-bold text-red-500">
              Extreme Hygiene Measures
            </h1>
            <p className="mt-4 ml-6 mr-12 text-2xl font-semibold text-orange-500 ">
              Your safety is our priority. Our pizza app ensures a worry-free
              experience with rigorous hygiene measures, from kitchen to
              doorstep, so you can savor every bite with peace of mind.
            </p>
          </div>
          <img
            className="rounded w-72"
            src="https://magazinebbm.com/assets/img/uploads/en-US/2019/10/bread-quality-control.jpg"
          />
        </div>

        <div className="flex justify-between mx-20 mt-52">
          <img
            className="rounded w-72"
            src="https://assets.gqindia.com/photos/60f932bbbc55a78132763da9/16:9/w_2560%2Cc_limit/Hundo%2520Pizza.jpg"
          />
          <div>
            <h1 className="mt-6 ml-6 text-6xl font-bold text-red-500">
              We Ensure Varity
            </h1>
            <p className="mt-4 ml-6 mr-12 text-2xl font-semibold text-orange-500">
              Indulge in a world of flavors with our diverse range of pizzas,
              from classic Margherita to bold BBQ chicken – a slice for every
              craving awaits.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mt-64 mb-20 font-bold text-center text-red-500 text-7xl mx-28">Services Available All Over India!</h1>
          <img className="w-full mb-36" src="https://www.seekpng.com/png/full/831-8310477_close-to-one-third-of-indias-mobile-subscribers.png"/>
        </div>
      </div>
    </>
  );
}

export default App;
