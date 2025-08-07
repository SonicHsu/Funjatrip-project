import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="max-w-screen">
        <Header />
        <main>
          <HeroSection />

          {/* <DestinationsSection />
        <SchoolsSection />
        <ToursSection />
        <AboutSection /> */}
        </main>
        {/* <Footer /> */}
      </div>

    </>
  );
}

export default App;
