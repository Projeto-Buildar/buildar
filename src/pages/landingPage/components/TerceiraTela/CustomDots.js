import * as React from "react";

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    // ele precisa está em position relative e com um zIndex maior que 0 para funcionar,se não os botões não funcionam
    // use o active para definir estilizações quando a bolinha correspondente ao item no carrosel estiver ativada
    <li style={{position: 'relative',zIndex: "1", width: active ? "40px" : "10px", paddingInline: "2%", transform: "translateY(25%)"}}>
      <button
        style={{width: "100%", height: "10px", background: active ? "white" : "mediumPurple", border: "none", borderRadius: "15px" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;