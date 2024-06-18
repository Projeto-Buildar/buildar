const CustomArrow = ({props, onClick, ...rest }) => {
    // console.log(props)
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div className={props} onClick={() => onClick()} />;
  };

export default CustomArrow;
