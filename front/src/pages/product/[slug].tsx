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
import FreteCalculator from "@/components/FreteCalculator";

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  details: string;
  price: number;
  brand: string;
  model: string;
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
  const { image, name, details, price, model, brand } = product;
  const [index, setIndex] = useState(0);

  return (
    <div className="p-7 mt-20 text-black">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
        <div className="flex flex-col justify-center ">
          {/* images */}
          <div className="w-96 h-96">
            <img src={urlFor(image && image[index])} />
          </div>
          {/* small images */}
          <div className="flex mt-4 w-24 h-24">
            {image?.map((item: string, i: string) => (
              <img src={urlFor(item)} onMouseEnter={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-3/12">
          <h1 className="text-3xl font-bold">{name}</h1>

          <div className="flex items-center my-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p> (20)</p>
          </div>

          <div className="my-3">
            <p className="font-bold text-xs mb-1">
              Marca: <span className="uppercase font-normal">{brand}</span>
            </p>
            <p className="font-bold text-xs mb-1">
              Modelo: <span className="uppercase font-normal">{model}</span>
            </p>
          </div>

          <div className="w-full">
            <hr></hr>
            <p className="my-3">{details}</p>
            <hr></hr>
          </div>

          <p className="font-bold text-xl text-amber-500 my-3">R$ {price}</p>

          <div className="flex items-center">
            <h3 className="font-bold mr-3 text-md">Quantidade:</h3>

            <div className="flex items-center my-3 w-36 border-2">
              <span className="flex justify-center items-center w-12 h-6 bg-slate-200">
                <AiOutlineMinus />
              </span>
              <span className="flex justify-center w-12">0</span>
              <span className="flex justify-center items-center w-12 h-6 bg-slate-200">
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className="w-full my-3">
            <hr></hr>
            <FreteCalculator />
            <hr></hr>
          </div>

          <div className="flex flex-col items-start">
            <button className="w-full uppercase bg-amber-500 hover:bg-slate-400 text-white rounded-xl p-2 mt-1 mb-3">
              Adicionar no Carrinho
            </button>
            <button className="w-full uppercase bg-black hover:bg-slate-400 text-white rounded-xl p-2 mb-3">
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-center text-2xl my-10">Recomendados</h2>
        <div>
          <div className="flex flex-col lg:flex-row">
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
