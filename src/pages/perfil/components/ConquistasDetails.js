import '../Perfil.css';
import ConquistaDetailed from './ConquistaDetailed';
import achievImage0 from '../images/achievement_img0.png'
import achievImage1 from '../images/achievement_img.png';
import achievImage2 from '../images/achievement_img1.png';
import achievImage3 from '../images/achievement_img2.png';
import achievImage4 from '../images/achievement_img3.png';
import achievImageBuildar from '../images/achievement_img-Buildar.png';

import { useTranslation } from 'react-i18next';



export default function ConquistasDetails() {
    const { t } = useTranslation();


    const achievDetails = [
        {
            url: achievImage0,
            color: '#58D2FF',
            title: `${t("communication")}`,
            description: `${t("descriptionCommunication")}`,
        },
        {
            url: achievImage1,
            color: '#FF486D',
            title: `${t("managementOfAges")}`,
            description: `${t("descriptionManagementOfAges")}`,
        },
        {
            url: achievImage2,
            color: '#C6EC3E',
            title: `${t("theHourOfTruth")}`,
            description: `${t("descriptionTheHourOfTruth")}`,
        },
        {
            url: achievImage3,
            color: '#FFD600',
            title: `${t("learningToBuild")}`,
            description: `${t("descriptionLearningToBuild")}`,
        },
        {
            url: achievImage4,
            color: '#9B33FD',
            title: `${t("successfulLeader")}`,
            description: `${t("descriptionSuccessfulLeader")}`,
        },
        {
            url: achievImageBuildar,
            color: '#D3CED7',
            title: `${t("stillLearning")}`,
            description: `${t("descriptionStillLearning")}`,
        },
        {
            url: achievImageBuildar,
            color: '#D3CED7',
            title: `${t("stillLearning")}`,
            description: `${t("descriptionStillLearning")}`,
        }
    ]

    return (
        <ul>
            {achievDetails.map((item, index) => {
                return <ConquistaDetailed key={index} url={item.url} color={item.color} title={item.title} description={item.description}/>
            })}
        </ul>
    )
}