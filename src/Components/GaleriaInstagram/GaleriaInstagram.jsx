import style from "./GaleriaInstagram.module.css";

const GaleriaInstagram = () => {
  return (
    <div className={style.container} id="seccion-galeria">
      <h1>Galeria</h1>
      <div className={style.row}>
        <div className={style.column}>
          <a href="https://www.instagram.com/p/Cu2LVvsxOvT/">
            <img
              src="/assets/imagen-galeria-1.jpg"
              className="card-img-top"
              alt="carrito de foodtruck de Chicha Style"
            />
          </a>
          <a href="https://www.instagram.com/p/CrJ3gkzOEIX/">
            <img
              src="/assets/imagen-galeria-2.jpg"
              className="card-img-top"
              alt="carrito animado de foodtruck de Chicha Style"
            />
          </a>
          <a href="https://www.instagram.com/p/CrMLTWGOQ8m/">
            <img
              src="/assets/imagen-galeria-3.jpg"
              className="card-img-top"
              alt="encuesta de calidad de Chicha Style"
            />
          </a>
        </div>
        <div className={style.column}>
          <a href="https://www.instagram.com/p/CrOPuqIO96a/">
            <img
              src="/assets/imagen-galeria-4.jpg"
              className="card-img-top"
              alt="sigue a chicha style en sus redes"
            />
          </a>
          <a href="https://www.instagram.com/p/CgzUrDrOM2W/">
            <img
              src="/assets/imagen-galeria-5.jpg"
              className="card-img-top"
              alt="imagen del foodtruck de Chicha"
            />
          </a>
          <a href="https://www.instagram.com/p/CsFY0EkMllg/">
            <img
              src="/assets/imagen-galeria-6.jpg"
              className="card-img-top"
              alt="evento de Chicha Style"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GaleriaInstagram;
