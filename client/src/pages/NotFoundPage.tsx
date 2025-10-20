import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage: React.FC = () => (
  <>
    <Navbar />
    <main style={{ textAlign: "center", margin: "4rem 0" }}>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
