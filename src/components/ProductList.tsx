"use client";

import { useEffect, useState } from "react";
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
    <div
      className="grid grid-cols-3
      w-auto gap-x-10 items-center text-center bg-[url('https://pngtree.com/freebackground/a-festive-scene-with-cheerful-people-exchanging-gifts-and-greetings-against-backdrop-of-colorful-bazaars-bustling-streets_15437998.html')]"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="rounded-t-lg"
            width={300}
            height={300}
          />
          <div className="p-5">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h1>
            <span className="flex justify-between p-5 rounded-md pt-3 ">
              <span className="flex font-bold">
                price:
                <h2 className=" font-bold">${product.price}</h2>
              </span>
              <span className="flex font-bold">
                rating:
                <h3 className="font-bold">{product.rating}⭐</h3>
              </span>
            </span>
          </div>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            <Link href={`./product${product.id}`}>More</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
