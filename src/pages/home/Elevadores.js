import Elevador from "./Elevador"

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CustomArrow from '../landingPage/components/OitavaTela/CustomArrow';

import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Elevadores() {
    const {t, i18n } = useTranslation();

    const corredores = [
        {
            softSkill:t("gestão_de_tempo"),
            mapa: "GestaoDeTempo"
        },
        {
            softSkill: t("resiliência"),
            mapa: "../home"
        },
        {
            softSkill: t("negociação"),
            mapa: "../home"
        },
        {
            softSkill: t("criatividade"),
            mapa: "../home"
        },
        {
            softSkill: t("adaptabilidade"),
            mapa: "../home"
        },
        {
            softSkill: t("empatia"),
            mapa: "../home"
        },
        {
            softSkill: t("em_breve"),
            mapa: "../home"
        }
    ];

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
                            max: 880,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 880
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
                {corredores.map((obj, index) => {
                    return <Elevador key={index} link={`/corredor/${obj.mapa}`} softSkill={obj.softSkill}/>
                })}
            </Carousel>
        </div>
    );
}