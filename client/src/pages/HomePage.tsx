import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeDashboard from "../features/home/HomeDashboard";

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <HomeDashboard />
    </main>
    <Footer />
  </>
);

export default HomePage;
