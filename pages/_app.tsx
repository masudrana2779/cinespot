import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import {CookiesProvider} from "react-cookie";
import store from "../redux/store";
import {createWrapper} from "next-redux-wrapper";

function MyApp({Component, pageProps}: AppProps) {
  return <CookiesProvider><Component {...pageProps} /></CookiesProvider>
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);

