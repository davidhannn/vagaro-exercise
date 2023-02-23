import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useGetCountries from "../hooks/useGetCountries";
import Hero from "@/components/Hero";
import { CountryType } from "@/types/country";

const Home: React.FC = () => {
  const data = useGetCountries();
  console.log(data, "data");
  // console.log(
  //   data.then((data) => console.log("ye")),
  //   "why"
  // );

  // if (data?.loading) {
  //   return <div></div>;
  // }

  return (
    <div className="text-3xl font-bold underline">
      {/* <Hero /> */}
      <h1>Test</h1>
      <h2>Hi</h2>

      {/* {data?.map((country: CountryType, key) => {
        console.log("yo?");
        // return <p key={country.code}>{country.name}</p>;
      })} */}
    </div>
  );
};

export default Home;
