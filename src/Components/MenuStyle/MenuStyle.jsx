import style from "./MenuStyle.module.css";

const MenuStyle = () => {
  return (
    <div className={style.container} id="seccion-menu">
      <h2>Menu Style</h2>
      <article>
        <img src="../../../public/images/menu-1.png" alt="" />
        <div>
          <h3>HAMBURGUESA COMPLETA</h3>
          <p>
            Pan de papa, lechuga, tomate, cebolla y pimiento asado, mayonesa
            casera, ketchup y con un medallón de carne vacuna 120gr. Viene
            acompañada con papas fritas.
          </p>
        </div>
      </article>
      <article>
        <img src="../../../public/images/menu-2.png" alt="" />
        <div>
          <h3>HAMBURGUESA VEGETARIANA</h3>
          <p>
            Pan de papa, lechuga, tomate, cebolla y pimiento asados, mayonesa
            casera, ketchup con un medallón veggie (consultar variedad). Viene
            acompañada con papas fritas.
          </p>
        </div>
      </article>
      <article>
        <img src="../../../public/images/menu-3.png" alt="" />
        <div>
          <h3>HAMBURGUESA BUFALO</h3>
          <p>
            Pan de papa, lechuga, tomate, cebolla morada, pepinillos, mayonesa
            casera, ketchup y con un medallón de carne de búfalo 120gr. Viene
            acompañada con papas fritas.
          </p>
        </div>
      </article>
      <article>
        <img src="../../../public/images/menu-4.png" alt="" />
        <div>
          <h3>CONO DE PAPAS</h3>
          <p>
            Conito de papas fritas condimentadas con aderezos a elección
            (mayonesa, ketchup y/o mostaza).
          </p>
        </div>
      </article>
      <article>
        <img src="../../../public/images/menu-5.png" alt="" />
        <div>
          <h3>BANDEJA DE PAPAS</h3>
          <p>
            Bandeja de papas fritas condimentadas con aderezos a elección
            (mayonesa, ketchup y/o mostaza) podes agregarle . Huevo, Salchichas,
            Cheddar, Cebolla y pimiento.
          </p>
        </div>
      </article>
      <article>
        <img src="../../../public/images/menu-6.png" alt="" />
        <div>
          <h3>BEBIDAS</h3>
          <p>Gaseosas (500 ml) Agua (500 ml)</p>
        </div>
      </article>
      <img className={style.fondo} src="../../../public/images/fondo-4.png" alt="fondo de la sección del menú" />
    </div>
  );
};

export default MenuStyle;
