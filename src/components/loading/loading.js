import React from "react";

function Percentageloading() {
  const body = {
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2a9d8f",
  };

  return (
    <div style={body}>
      <div>SEDANG MEMUAT ...</div>
    </div>
  );
}

export default Percentageloading;
