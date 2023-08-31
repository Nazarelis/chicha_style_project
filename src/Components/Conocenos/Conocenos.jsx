import style from "./Conocenos.module.css";

const Conocenos = () => {
  return (
    <div className={style.container} id="seccion-conocenos">
      <article>
      <h2>Conocenos</h2>
      <p>
        Chicha Style Food Truck es una empresa familiar que surge para hacer
        realidad un sueño de dos personas que querían una vida en común. Buscar
        un punto de encuentro entre valores, ilusiones, diseño, familia,
        amistades, poner en manifiesto todo lo aprendido y muchas ganas para
        seguir aprendiendo y sobre todo compartir RICOS SABORES.
      </p>
      <div>
      <iframe
        src="https://www.youtube.com/embed/sbz9z7hULds"
        title="Mercury 1957❌Food Track❌By KM X"
        frameborder="0"
        width="50%"
        height="500"
      ></iframe>
      </div>
      </article>
      <img src="../../../public/images/fondo-1.png" alt="fondo de la sección conocenos" />
    </div>
  );
};

export default Conocenos;
