import "../styles/globals.css";
import type { AppProps } from "next/app";
import Right_block from "./right_block/Right_block";
import "../styles/category.scss";
import "../styles/searchText.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="App">
        <Right_block />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
