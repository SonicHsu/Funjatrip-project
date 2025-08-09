import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import SchoolsSection from "./components/SchoolsSection";
import ToursSection from "./components/ToursSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

import useMainPageData from "./hooks/useMainPageData";

function App() {
  const { data, loading, error } = useMainPageData();

  console.log("data:", data); // 看 data 內容
  console.log("loading:", loading);
  console.log("error:", error);
  return (
    <>
      <div className="max-w-screen">
        <Header />
        <main>
          <HeroSection />

          <DestinationsSection />
          <SchoolsSection />
          <ToursSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
