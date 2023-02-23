import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useGetCountries from "../hooks/useGetCountries";
import Hero from "@/components/Hero";
import { CountryType } from "@/types/country";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* {data?.map((country: CountryType, key) => {
        console.log("yo?");
        // return <p key={country.code}>{country.name}</p>;
      })} */}
    </div>
  );
};

export default Home;
