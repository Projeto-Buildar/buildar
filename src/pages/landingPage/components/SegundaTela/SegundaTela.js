import './SegundaTela.css';
import { useTranslation } from 'react-i18next';
import '../../../../i18n';

export default function SegundaTela() {
  const { t } = useTranslation();
  
  return (
    <div className='frames' id="segundaTela">
      <article>
        <h2>{t('trainSoftSkills')}</h2>
        <p>{t('simulationDescription')} <span className='destaqAzul'>{t('easy')}</span> {t('and')} <span className='highlightBlue'>{t('fun')}</span>.</p>
      </article>
      <section>
        <div className='monitor'>
          <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bff32934-e726-4d2c-85f9-2ed211cc4e46/d6s8igo-8d1afe0b-d1cf-49c5-a560-92e661d3a89b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmZjMyOTM0LWU3MjYtNGQyYy04NWY5LTJlZDIxMWNjNGU0NlwvZDZzOGlnby04ZDFhZmUwYi1kMWNmLTQ5YzUtYTU2MC05MmU2NjFkM2E4OWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3omUKcbixy-jTrCZyamQx3uXd8q2vsI_h7xXZjOmLKg' alt='Monitor'/>
        </div>
      </section>
    </div>
  );
}