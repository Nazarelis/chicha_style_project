import style from "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import Conocenos from "./Components/Conocenos/Conocenos.jsx";
import MenuStyle from "./Components/MenuStyle/MenuStyle";
import NuestrosServicios from "./Components/NuestrosServicios/NuestrosServicios.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      
      <Slider/>
      <Conocenos />
      <NuestrosServicios />
      <MenuStyle />
      <Footer/>
    </>
  );
}

export default App;
