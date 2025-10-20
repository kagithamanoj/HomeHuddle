import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SharedLivingDashboard from "../features/shared-living/SharedLivingDashboard";

const SharedLivingPage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <SharedLivingDashboard />
    </main>
    <Footer />
  </>
);

export default SharedLivingPage;
