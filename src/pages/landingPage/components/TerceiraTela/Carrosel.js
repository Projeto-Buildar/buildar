import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CustomDot from "./CustomDots";

export default function Carrosel(props){
    return(
        <Carousel
        customDot={<CustomDot></CustomDot>}
            arrows={props.arrows}
            autoPlaySpeed={3000}
            centerMode={false}
            className="carrosel"
            containerClass=""
            dotListClass=""
            draggable={props.draggable}
            focusOnSelect={false}
            infinite={props.infinite}
            itemClass="liCarrosel"
            keyBoardControl={false}
            minimumTouchDrag={80}
            pauseOnHover={props.pauseOnHover}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: props.qntItensDesk,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            rewind={true}
            rewindWithAnimation={true}
            rtl={false}
            shouldResetAutoplay={true}
            showDots={props.showDots}
            sliderClass="ulCarrosel"
            slidesToSlide={1}
            swipeable
            autoPlay={props.autoPlay}
          >
            {props.conteudo}
          </Carousel>
    );
}