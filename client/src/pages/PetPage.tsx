import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetDashboard from "../features/pet/PetDashboard";

const PetPage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <PetDashboard />
    </main>
    <Footer />
  </>
);

export default PetPage;
