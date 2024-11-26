const CustomArrow = ({props, onClick, ...rest }) => {
    // console.log(props)
    const {
      // eslint-disable-next-line no-unused-vars
      onMove,
      // eslint-disable-next-line no-unused-vars
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div className={props} onClick={() => onClick()} />;
  };

export default CustomArrow;
