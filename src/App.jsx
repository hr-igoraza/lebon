import "./App.css";
import HeroSection from "./sections/heroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import TodaysSpecial from "./sections/todays-special/TodaysSpecial";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TodaysSpecial/>
      
    </>
  );
}

export default App;
