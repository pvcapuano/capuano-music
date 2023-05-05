import Banner from "@/components/Banner";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import Card from "@/components/Card";
import { GetServerSideProps } from "next";

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
interface HomeProps {
  products: Product[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div>
      <Banner />
      <h1>Instrumentos</h1>

      <div>
        {console.log(products)}
        {products?.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};

export default Home;
