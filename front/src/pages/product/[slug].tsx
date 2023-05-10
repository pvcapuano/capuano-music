import React, { useState } from "react";
import { client, urlFor } from "../../../lib/client";
import { GetStaticProps } from "next";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Card from "@/components/Card";

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

const ProductDetails = ({ product, products }: CardProps) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-20 text-black">
      <div>
        <div>
          <div>
            <img src={urlFor(image && image[index])} />
          </div>
          {/* small images */}
          <div>
            {image?.map((item: string, i: string) => (
              <img src={urlFor(item)} onMouseEnter={() => setIndex(i)} />
            ))}
          </div>

          <div>
            <h1> {name}</h1>
            <div>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>Detalhes:</h4>
            <p>{details}</p>
            <p>R${price}</p>

            <div>
              <h3>Quantidade:</h3>
              <p>
                <span>
                  <AiOutlineMinus />
                </span>
                <span>0</span>
                <span>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>

            <div>
              <button>Adicionar no Carrinho</button>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Você também irá curtir</h2>
        <div>
          <div>
            {products.map((item) => (
              <Card key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
