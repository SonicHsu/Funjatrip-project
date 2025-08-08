import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import SchoolsSection from "./components/SchoolsSection";
import ToursSection from "./components/ToursSection";

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
        {/* <AboutSection /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
