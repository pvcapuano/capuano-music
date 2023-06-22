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
    <div className="">
      <Banner />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-7">
        {products?.map((product) => (
          <div className="flex justify-center items-center ">
            <Card key={product._id} product={product} />
          </div>
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
