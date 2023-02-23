import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useGetCountries from "../hooks/useGetCountries";

export default function Home() {
  useGetCountries();
  return (
    <div className="text-3xl font-bold underline">
      <h1>Test</h1>
      <h2>Hi</h2>
    </div>
  );
}
