import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages for performance
const HomePage = lazy(() => import("./pages/HomePage"));
const PetPage = lazy(() => import("./pages/PetPage"));
const SharedLivingPage = lazy(() => import("./pages/SharedLivingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Optional: Error Boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown, info: unknown) {
    // You can also log error to error reporting service here
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", color: "#e53935", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>We're working to fix the problem. Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pet" element={<PetPage />} />
        <Route path="/shared-living" element={<SharedLivingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;
