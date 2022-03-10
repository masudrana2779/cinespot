import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import {CookiesProvider} from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
