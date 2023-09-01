import style from "./GaleriaInstagram.module.css";

const GaleriaInstagram = () => {
  return (
    <div className={style.container}>
      <h2>Posts de Instagram</h2>
      <div className={style.row}>
        <div className={style.column}>
          <a href="https://www.instagram.com/p/Cu2LVvsxOvT/">
            <img
              src="images/imagen-galeria-1.jpg"
              class="card-img-top"
              alt="carrito de foodtruck de Chicha Style"
            />
          </a>
          <a href="https://www.instagram.com/p/CrJ3gkzOEIX/">
            <img
              src="images/imagen-galeria-2.jpg"
              class="card-img-top"
              alt="carrito animado de foodtruck de Chicha Style"
            />
          </a>
          <a href="https://www.instagram.com/p/CrMLTWGOQ8m/">
            <img
              src="images/imagen-galeria-3.jpg"
              class="card-img-top"
              alt="encuesta de calidad de Chicha Style"
            />
          </a>
        </div>
        <div className={style.column}>
          <a href="https://www.instagram.com/p/CrOPuqIO96a/">
            <img
              src="images/imagen-galeria-4.jpg"
              class="card-img-top"
              alt="sigue a chicha style en sus redes"
            />
          </a>
          <a href="https://www.instagram.com/p/CgzUrDrOM2W/">
            <img
              src="images/imagen-galeria-5.jpg"
              class="card-img-top"
              alt="imagen del foodtruck de Chicha"
            />
          </a>
          <a href="https://www.instagram.com/p/CsFY0EkMllg/">
            <img
              src="images/imagen-galeria-6.jpg"
              class="card-img-top"
              alt="evento de Chicha Style"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GaleriaInstagram;
