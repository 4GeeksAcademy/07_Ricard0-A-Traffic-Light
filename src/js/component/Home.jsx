import React, { useState } from "react";

const Home = () => {
  // En vez de reasignacion como variables, usamos useStates
  // Formula Variable NewVariable = useState(CurrentVariableValue)
  // const [selectedBall, setSelectedBall] = useState(null);


  const [value, setValue] = useState(null)

  // Estilo para el brillo
  const transparencia = {
    boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.9)",
  };



  return (
    <div className="master">
      <div className="stick"></div>
      <div className="semaforo">
        {/* Bola roja */}
        <div
          className="ballOne"
          // Claro style con doble corchetes accedes a la posiblidad de agregar Css como shorthand(quickly) 
          // el spread, hace lo que tiene que hacer, pero si le pongo una condicion en medio como este ternario
          // pues espera a que cosa va a hacerle spread, sera transparencia ?, o... Objeto Vacio
          style={{
              ...(selectedBall === 0 ? transparencia : {}),
          }}
          // En cada click, colocamos como valor de la bola exactamente como el ternario la necesita 
          // para que ... usuarioClick == BolaSombreada
          onClick={() => setSelectedBall(0)}
        ></div>

        {/* Bola amarilla */}
        <div
          className="ballTwo"
          style={{
            ...(selectedBall === 1 ? transparencia : {}),
          }}
          onClick={() => setSelectedBall(1)}
        ></div>

        {/* Bola verde */}
        <div
          className="ballThree"
          style={{
            ...(selectedBall === 2 ? transparencia : {}),
          }}
          onClick={() => setSelectedBall(2)}
        ></div>
      </div>
    </div>
  );
};

export default Home;






