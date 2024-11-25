import Footer from '../headersEfooters/footerPreLogin/Footer';
import './Termos.css';
// import HeaderHome from "../home/HeaderHome";
import HeaderTermos from './components/headertermos';
import { useTranslation } from 'react-i18next';

export default function Termos() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderTermos />
            <main className="termos-container">
                <section className="termos-content">
                    <h2>{t('termsOfUse')}</h2>
                    <p><em>{t('lastUpdate')}</em></p>
                    
                    <h3>1. {t('acceptanceOfTerms')}</h3>
                    <p>{t('acceptanceOfTermsDescription')}</p>
                    
                    <h3>2. {t('descriptionOfServices')}</h3>
                    <p>{t('descriptionOfServicesDescription')}</p>
                    
                    <h3>3. {t('registrationAndUserAccount')}</h3>
                    <p>{t('registrationAndUserAccountDescription')}</p>
                    
                    <h3>4. {t('useOfPlatform')}</h3>
                    <p>{t('useOfPlatformDescription')}</p>
                    
                    <h3>5. {t('userContent')}</h3>
                    <p>{t('userContentDescription')}</p>
                    
                    <h3>6. {t('privacy')}</h3>
                    <p>{t('privacyDescription')}</p>
                    
                    <h3>7. {t('modificationsToTerms')}</h3>
                    <p>{t('modificationsToTermsDescription')}</p>
                    
                    <h3>8. {t('limitationOfLiability')}</h3>
                    <p>{t('limitationOfLiabilityDescription')}</p>
                    
                    <h3>9. {t('termination')}</h3>
                    <p>{t('terminationDescription')}</p>
                    
                    <h3>10. {t('generalProvisions')}</h3>
                    <p>{t('generalProvisionsDescription')}</p>
                    
                    <h3>11. {t('contact')}</h3>
                    <p>{t('contactDescription')}</p>

                    <p>{t('platformUsageAgreement')}</p>
                </section>
            </main>
            <Footer />
        </>
    );
}
