"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://dummyjson.com/products");
  const data = await res.json();
  return data;
};

interface Product {
  id: number;
  price: number;
  title: string;
  rating: number;
  description: string;
  thumbnail: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center justify-center mt-5">
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-80 bg-slate-500 rounded-lg object-cover"
            width={320} 
            height={320} 
          />
          <h1 className="text-4xl mb-5 mt-3">{product.title}</h1>
          <div className="flex mb-4 gap-5 font-bold">
            <h2 className="text-3xl">Price: ${product.price}</h2>
            <h2 className="text-3xl">Rating:✨{product.rating}</h2>
          </div>
          <p className="text-2xl mb-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, corporis ducimus hic id quisquam tenetur? Porro quaerat eius in veniam hic soluta accusamus quia repellendus saepe. Aperiam beatae eius et doloribus sapiente vitae eligendi quae, magni eveniet iusto ex assumenda, distinctio consequuntur facere minima est? Laborum recusandae delectus accusantium voluptate.
          </p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4">
            <Link href="/">Back to home</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
