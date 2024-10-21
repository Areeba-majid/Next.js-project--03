import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <section id="menu" className="py-12 bg-yellow-200 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
        <p className="text-lg mb-6">
          Explore our selection of delicious dishes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 shadow-lg text-white">
            <div className="relative w-full h-64">
              <Image
                src="/burger1.png"
                alt="burger"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Burger</h3>
            <p className="font-medium">PKR : 350</p>
          </div>

          <div className="bg-gray-700 text-white p-6 shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/pizza.webp"
                alt="Pizza"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
            <h3 className="text-xl font-bold mb-2">Margherita Pizza</h3>
            <p className="font-medium">PKR : 600</p>
          </div>

          <div className="bg-gray-700 text-white p-6 shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/fries.webp"
                alt="Fries"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
            <h3 className="text-xl font-bold mb-2">French Fries</h3>
            <p className="font-medium">PKR : 150</p>
          </div>

          <div className="bg-gray-700 text-white p-6 shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/gappy.jpeg"
                alt="Gol Gappy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
            <h3 className="text-xl font-bold mb-2">Gol Gappy</h3>
            <p className="font-medium">PKR : 250</p>
          </div>

          <div className="bg-gray-700 text-white p-6 shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/chaii.avif"
                alt="chai"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
            <h3 className="text-xl font-bold mb-2">Masala Chai</h3>
            <p className="font-medium">PKR : 90</p>
          </div>

          <div className="bg-gray-700 text-white p-6 shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/juice.jpg"
                alt="juice"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              ></Image>
            </div>
            <h3 className="text-xl font-bold mb-2">Juices</h3>
            <p className="font-medium">PKR : 200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
