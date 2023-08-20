import style from "./NuestrosServicios.module.css";

const NuestrosServicios = () => {
  return (
    <div className={style.container}>
      <h2>Nuestros Servicios</h2>
      <h3>SUCURSAL</h3>
      <p>Av. Caraffa 2858, barrio Villa Cabrera.</p>
      <h3>EVENTOS PRIVADOS</h3>
      <p>
        Cumpleaños, casamientos, reuniones empresariales cualquier evento más de
        100 personas.
      </p>
      <h3>EVENTOS PÚBLICOS</h3>
      <p>
        Organizados por municipalidades y comunas. Ferias , festivales,
        recitales.
      </p>
      <img src="../../../public/images/fondo-3.png" alt="fondo de la sección de los servicios" />
    </div>
  );
};

export default NuestrosServicios;
