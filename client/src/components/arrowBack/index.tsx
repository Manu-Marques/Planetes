import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleOnClick}>
      Retour
    </button>
  );
};

export default BackButton;
