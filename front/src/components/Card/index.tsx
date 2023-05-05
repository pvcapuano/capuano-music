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
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img src={urlFor(image && image[0])} width={250} height={250} />
          <p>{name}</p>
          <p>{details}</p>
          <p>R${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
