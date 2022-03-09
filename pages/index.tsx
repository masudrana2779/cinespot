import axios from "axios";
import type { NextPage } from "next";
import HomeComponent from "../components/Home/HomeComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  axios
    .get("http://103.4.145.126:3366/api/v1/content/featured")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <Layout imageUrl={""} title={"Cinespot || Home"}>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
