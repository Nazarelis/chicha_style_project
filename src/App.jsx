// import style from "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import Conocenos from "./Components/Conocenos/Conocenos";
import MenuStyle from "./Components/MenuStyle/MenuStyle";
import NuestrosServicios from "./Components/NuestrosServicios/NuestrosServicios";
import Divider from "./Components/Divider/Divider";
import Contact from "./Components/Contact/Contact";
import FinalDivider from "./Components/FinalDivider/FinalDivider";
import Footer from "./Components/Footer/Footer";
import GaleriaInstagram from "./Components/GaleriaInstagram/GaleriaInstagram";
import './firebaseIntegration';

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Conocenos />
      <NuestrosServicios />
      <MenuStyle />
      <GaleriaInstagram />
      <Divider />
      <Contact />
      <FinalDivider />
      <Footer />
    </>
  );
}

export default App;
