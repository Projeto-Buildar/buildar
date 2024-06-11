import Elevador from "./Elevador"

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CustomArrow from '../landingPage/components/OitavaTela/CustomArrow';

const corredores = [
    {
        softSkill:"Gestão de Tempo"
        // mapa: ""
    },
    {
        softSkill: "Resiliência"
    },
    {
        softSkill: "Negociação"
    },
    {
        softSkill: "Criatividade"
    },
    {
        softSkill: "Adaptabilidade"
    },
    {
        softSkill: "Empatia"
    },
    {
        softSkill: "Em breve"
    }
]

export default function Elevadores() {
    return (
        <div>
            <Carousel
                customRightArrow={<CustomArrow props={"arrow"}></CustomArrow>}
                customLeftArrow={<CustomArrow props={"arrow left"}></CustomArrow>}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="divCarrosel"
                containerClass="container-with-dots"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite={false}
                itemClass="itemsCarrosel"
                keyBoardControl={false}
                minimumTouchDrag={80}
                pauseOnHover
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
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
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable

            >
                {corredores.map(obj => {
                    return <Elevador link="/corredor" softSkill={obj.softSkill} ></Elevador>
                })}
            </Carousel>
        </div>
    );
}