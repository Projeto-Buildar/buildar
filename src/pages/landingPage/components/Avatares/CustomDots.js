import * as React from "react";

const CustomDot = ({ ...props }) => {
  const { onClick, active, index, carouselState } = props;
  const { currentSlide } = carouselState;
  return (
    // ele precisa está em position relative e com um zIndex maior que 0 para funcionar,se não os botões não funcionam
    // use o active para definir estilizações quando a bolinha correspondente ao item no carrosel estiver ativada
    <li className={`${props.dotsLi} ${active ? 'liActive' : 'liDisabled'}`} >
      <button className={`${props.dotsButton} ${active ? 'buttonActive' : 'buttonDisabled'}`}
        style={{cursor: "pointer" ,width: "100%", height: "10px", background: active ? "white" : "mediumPurple", border: "none", borderRadius: "15px" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;