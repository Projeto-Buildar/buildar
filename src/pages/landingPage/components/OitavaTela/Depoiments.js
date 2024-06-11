import './OitavaTela.css';
import "react-multi-carousel/lib/styles.css";

import Depoiment from './Depoiment';
import CustomArrow from './CustomArrow';

import user1 from '../../images/user1.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';

import Carousel from "react-multi-carousel";

import { useTranslation } from 'react-i18next';
import "../../../../i18n"




export default function Depoiments() {

  const {t, i18n } = useTranslation();

  const userInfo = [
    {
        image: user1,
        name: 'Carlos',
        age: '19',
        text: t('carlosExperience'),
        color: '#FFB412'
    },
    {
        image: user2,
        name: 'Marina Ribeiro',
        age: '23',
        text: t('nameExperience'),
        color: '#58D2FF'
    },
    {
        image: user3,
        name: 'Arthur',
        age: '23',
        text: t('nameNomentaExperience'),
        color: '#FFB412'
    },
    {
      image: user3,
      name: 'Name Nomenta da N',
      age: '23',
      text: t('nameNomentaExperience'),
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
              items: 2,
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