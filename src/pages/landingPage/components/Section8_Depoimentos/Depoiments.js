import Carousel from "react-multi-carousel";

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

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

import "react-multi-carousel/lib/styles.css";
import './OitavaTela.css';

export default function Depoiments() {

  const { t, chaveComPrefixo } = useControleDeTraducao("section8.depoimentos");

  const userInfo = [
    {
      image: userBraz,
      name: 'Gabriel Bras',
      age: '19',
      text: t(chaveComPrefixo('userBraz')),
      color: '#FFB412'
    },
    {
      image: userNilvan,
      name: 'Nilvan Moura',
      age: '21',
      text: t(chaveComPrefixo('userNilvan')),
      color: '#58D2FF'
    },
    {
      image: userDiogo,
      name: 'Diogo Antony',
      age: '19',
      text: t(chaveComPrefixo('userDiogo')),
      color: '#FFB412'
    },
    {
      image: userHelen,
      name: 'Helen da Silva',
      age: '21',
      text: t(chaveComPrefixo('userHelen')),
      color: '#58D2FF'
    },
    {
      image: userRyan,
      name: 'Ryan Picoli',
      age: '21',
      text: t(chaveComPrefixo('userRyan')),
      color: '#FFB412'
    },
    {
      image: userLilian,
      name: 'Lilian Carvalho',
      age: '19',
      text: t(chaveComPrefixo('userLilian')),
      color: '#58D2FF'
    },
    {
      image: userLais,
      name: 'Lais Carvalho',
      age: '19',
      text: t(chaveComPrefixo('userLais')),
      color: '#FFB412'
    },
    {
      image: userGabi,
      name: 'Gabrielle Correa',
      age: '19',
      text: t(chaveComPrefixo('userGabi')),
      color: '#58D2FF'
    },
    {
      image: userMartinha,
      name: 'Marta Roberta P G Teles',
      age: '43',
      text: t(chaveComPrefixo('userMartinha')),
      color: '#FFB412'
    }
  ];

  // Atenção ⚠: Possibilidade de restruturar esse carrosel utilizando seu componente no shared
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
        return (
          <Depoiment
            key={index}
            image={depoiments.image}
            name={depoiments.name}
            age={depoiments.age}
            text={depoiments.text}
            color={depoiments.color}
          />
        )
      })}
    </Carousel>);
}