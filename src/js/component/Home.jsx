import React, { useState } from "react";

const Home = () => {
  const [selectedBall, setSelectedBall] = useState(null);

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
          style={{
            ...(selectedBall === 0 ? transparencia : {}),
          }}
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
