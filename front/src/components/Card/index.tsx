import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  details: string;
  price: number;
  brand: string;
  image: {
    asset: {
      url: string;
    };
  }[];
}

interface CardProps {
  product: Product;
}

const Card = ({
  product: { name, slug, details, price, brand, image },
}: CardProps) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="flex flex-col justify-around border-1 rounded-lg bg-gray-100 shadow-2xl w-52 mt-4 h-96 bg-white transition ease-in duration-200 hover:-translate-y-2">
          <div className="rounded-lg">
            <img
              src={urlFor(image && image[0]).url()}
              width={250}
              height={250}
            />
          </div>

          <div className="flex flex-col items-start justify-center mt-2 p-2">
            <h1 className=" text-md my-2">{name}</h1>
            <p className="font-bold text-sm text-amber-500">R$ {price}</p>
            <p className="text-sm mb-2 mt-1">Em até 12x sem juros</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
