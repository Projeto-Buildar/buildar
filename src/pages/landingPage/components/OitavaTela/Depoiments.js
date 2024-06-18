import './OitavaTela.css';
import "react-multi-carousel/lib/styles.css";

import Depoiment from './Depoiment';
import CustomArrow from './CustomArrow';

import userNilvan from '../../images/Nilvan.webp'
import userBraz from '../../images/Braz.webp'
import userDiogo from '../../images/Diogo.webp'

import Carousel from "react-multi-carousel";

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function Depoiments() {

  const {t} = useTranslation();

  const userInfo = [
    {
        image: userBraz,
        name: 'Gabriel Braz',
        age: '19',
        text: t('userBraz'),
        color: '#FFB412'
    },
    {
        image: userNilvan,
        name: 'Nilvan Moura',
        age: '21',
        text: t('userNilvan'),
        color: '#58D2FF'
    },
    {
        image: userDiogo,
        name: 'Diogo Antony',
        age: '19',
        text: t('userDiogo'),
        color: '#FFB412'
    }, 
];

    return (
        <Carousel     
        customRightArrow={<CustomArrow props={"arrow"}></CustomArrow>}
        customLeftArrow={<CustomArrow props={"arrow left"}></CustomArrow>}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="liCarrosel"
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
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass="ulCarrosel"
          slidesToSlide={1}
          swipeable
          
        >
          {userInfo.map((depoiments) => {
            return <Depoiment image={depoiments.image} name={depoiments.name} age={depoiments.age} text={depoiments.text} color={depoiments.color} />
          })}
        </Carousel>);
}