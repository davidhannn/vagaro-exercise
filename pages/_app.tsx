import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DropdownComponent from "@/components/Dropdown";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DropdownComponent />
      <Component {...pageProps} />
    </>
  );
}
