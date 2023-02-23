import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useGetCountries from "../hooks/useGetCountries";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import { CountryType } from "@/types/country";
import Dropdown from "@/components/Dropdown";

const Home: React.FC = () => {
  return (
    <div>
      <Dropdown />
      <Hero />
    </div>
  );
};

export default Home;
