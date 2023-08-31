import style from "./GaleriaInstagram.module.css";

const GaleriaInstagram = () => {
  return (
    <div class="container row" className={style.container}>
      <div class="card col">
        <a href="https://www.instagram.com/p/Cu2LVvsxOvT/">
        <img
          src="../../../public/images/imagen-galeria-1.jpg"
          class="card-img-top"
          alt="carrito de foodtruck de Chicha Style"
        />
        </a>
      </div>
      <div class="card col">
        <a href="https://www.instagram.com/p/CrJ3gkzOEIX/">
        <img
          src="../../../public/images/imagen-galeria-2.jpg"
          class="card-img-top"
          alt="carrito animado de foodtruck de Chicha Style"
        />
        </a>
      </div>
      <div class="card col">
        <a href="https://www.instagram.com/p/CrMLTWGOQ8m/">
          <img
            src="../../../public/images/imagen-galeria-3.jpg"
            class="card-img-top"
            alt="encuesta de calidad de Chicha Style"
          />
        </a>
      </div>
    </div>
  );
};

export default GaleriaInstagram;
