import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import SchoolsSection from "./components/SchoolsSection";
import ToursSection from "./components/ToursSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
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
