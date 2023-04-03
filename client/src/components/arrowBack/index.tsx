import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton () {
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