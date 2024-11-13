import './OitavaTela.css';
import "react-multi-carousel/lib/styles.css";

import Depoiment from './Depoiment';
import CustomArrow from './CustomArrow';

import userNilvan from '../../images/Nilvan.webp';
import userBraz from '../../images/Braz.webp';
import userDiogo from '../../images/Diogo.webp';
import userHelen from '../../images/Helen.webp';
import userRyan from '../../images/Ryan.webp';
import userLilian from '../../images/Lilian.webp';
import userLais from '../../images/Lais.webp';
import userGabi from '../../images/Gabi.webp';
import userMartinha from '../../images/Martinha.webp';

import Carousel from "react-multi-carousel";

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function Depoiments() {

  const {t} = useTranslation();

  const userInfo = [
    {
        image: userBraz,
        name: 'Gabriel Bras',
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
    {
      image: userHelen,
      name: 'Helen da Silva',
      age:  '21',
      text: t('userHelen'),
      color: '#58D2FF'
    },
    {
      image: userRyan,
      name: 'Ryan Picoli',
      age:  '21',
      text: t('userRyan'),
      color: '#FFB412'
    },
    {
      image: userLilian,
      name: 'Lilian Carvalho',
      age:  '19',
      text: t('userLilian'),
      color: '#58D2FF'
    },
    {
      image: userLais,
      name: 'Lais Carvalho',
      age:  '19',
      text: t('userLais'),
      color: '#FFB412'
    },
    {
      image: userGabi,
      name: 'Gabrielle Correa',
      age:  '19',
      text: t('userGabi'),
      color: '#58D2FF'
    },
    {
      image: userMartinha,
      name: 'Marta Roberta P G Teles',
      age:  '43',
      text: t('userMartinha'),
      color: '#FFB412'
    }
];

    return (
        <Carousel     
        customRightArrow={<CustomArrow props={"arrow"}></CustomArrow>}
        customLeftArrow={<CustomArrow props={"arrow left"}></CustomArrow>}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="coiso"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="liCarroselDepoiment"
          keyBoardControl={false}
          minimumTouchDrag={80}
          pauseOnHover
          renderButtonGroupOutside={true}
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
          sliderClass="ulCarroselDepoiment"
          slidesToSlide={1}
          swipeable
          
        >
          {userInfo.map((depoiments, index) => {
            return <Depoiment key={index} image={depoiments.image} name={depoiments.name} age={depoiments.age} text={depoiments.text} color={depoiments.color} />
          })}
        </Carousel>);
}