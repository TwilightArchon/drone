import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import Autonomy from "./components/Autonomy";
import DroneJourney from "./components/DroneJourney";
import Future from "./components/Future";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <UseCases />
        <Autonomy />
        <DroneJourney />
        <Future />
      </main>
      <Footer />
    </>
  );
}
