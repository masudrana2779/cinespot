import type { NextPage } from "next";
import HomeComponent from "../components/Home/HomeComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout imageUrl={""} title={"Cinespot || Home"}>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
