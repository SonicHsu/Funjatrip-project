import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import SchoolsSection from "./components/SchoolsSection";
import ToursSection from "./components/ToursSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

import useMainPageDataParsed from "./hooks/useMainPageDataParsed";

function App() {

    const {
    loading,
    error,
    homeMainBlock,
    areaBlocks,
    schoolBlocks,
    tripBlocks,
    textBlocks,
  } = useMainPageDataParsed();

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-center text-red-500 mt-10">發生錯誤: {error.message}</p>;

  return (
    <>
      <div className="max-w-screen">
        <Header />
        <main>
          <HeroSection block={homeMainBlock} />

          <DestinationsSection block={areaBlocks}/>
          <SchoolsSection block={schoolBlocks} />
          <ToursSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
