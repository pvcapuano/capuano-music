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
    }[];
  };
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
        <div className="border-1 rounded-md bg-gray-100 shadow-xl w-52">
          <img src={urlFor(image[0])} width={250} height={250} />
          <div className="p-2">
            <h1 className=" text-md my-2">{name}</h1>
            <p className="font-bold text-sm text-amber-500">R$ {price}</p>
            <p className="text-sm mb-2">Em até 12x sem juros</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
