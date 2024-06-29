import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './EventSearch.css'; // Importe o arquivo CSS

function EventSearch() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const eventos = [
    { nome: t('effectiveComm'), data: '2025-01-21', horario: '10:00', local: 'Centro de Convenções Anhembi' },
    { nome: t('timeMgmt'), data: '2024-08-05', horario: '14:00', local: 'Expo Center Norte' },
    { nome: t('teamWork'), data: '2024-11-09', horario: '09:00', local: 'Centro de Convenções Rebouças' },
    { nome: t('leadership'), data: '2025-03-24', horario: '13:00', local: 'Hotel Unique' },
    { nome: t('conflictRes'), data: '2025-06-01', horario: '11:00', local: 'Centro Cultural São Paulo' },
    { nome: t('nonViolentComm'), data: '2025-03-06', horario: '15:00', local: 'Sesc Paulista' },
    { nome: t('timeMgmtLead'), data: '2024-10-27', horario: '16:00', local: 'Teatro Municipal' },
    { nome: t('collabTeamWork'), data: '2025-02-08', horario: '10:00', local: 'Biblioteca Mário de Andrade' },
    { nome: t('presentationTech'), data: '2024-08-21', horario: '09:00', local: 'Casa das Rosas' },
    { nome: t('constructiveFeed'), data: '2025-06-12', horario: '14:00', local: 'Museu do Ipiranga' },
    { nome: t('activeListening'), data: '2025-05-14', horario: '13:00', local: 'Parque do Ibirapuera' },
    { nome: t('empathy'), data: '2024-09-23', horario: '11:00', local: 'Centro Cultural Vergueiro' },
    { nome: t('selfMgmt'), data: '2025-06-04', horario: '10:00', local: 'Espaço das Américas' },
    { nome: t('interpersonalComm'), data: '2024-10-24', horario: '15:00', local: 'Instituto Tomie Ohtake' },
    { nome: t('conflictMgmt'), data: '2025-02-08', horario: '09:00', local: 'Auditório Ibirapuera' },
    { nome: t('emotionalInt'), data: '2024-08-21', horario: '14:00', local: 'Centro de Convenções Imigrantes' },
    { nome: t('assertiveComm'), data: '2025-06-12', horario: '13:00', local: 'Centro de Convenções Frei Caneca' },
    { nome: t('teamChallenges'), data: '2025-05-14', horario: '16:00', local: 'Hotel Maksoud Plaza' },
    { nome: t('productivityFocus'), data: '2024-09-23', horario: '10:00', local: 'Espaço Hakka' },
    { nome: t('leadershipTeamMgmt'), data: '2025-06-04', horario: '09:00', local: 'Centro de Convenções São Paulo' }
  ];
  

  const handleSearch = () => {
    if (query.trim() === '') {
      setResults([{ nome: t('searchPrompt'), data: '', horario: '', local: '' }]);
      return;
    }

    const filteredEvents = eventos.filter(evento =>
      evento.nome.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredEvents.length > 0) {
      setResults(filteredEvents);
    } else {
      setResults([{ nome: t('noResult'), data: '', horario: '', local: '' }]);
    }
  };

  return (
    <div className="containerPesquisar">
      <h3>{t('header')}</h3>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('placeholder')}
          className="input"
        />
        <button onClick={handleSearch} className="buttonPesquisar">{t('button')}</button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <div className="result-header">
              <h4>{result.nome}</h4>
            </div>
            <div className="result-details">
              {result.data && <p className='pesquisa'>{t('Data:')} {result.data}</p>}
              {result.horario && <p className='pesquisa'>{t('Horário:')} {result.horario}</p>}
              {result.local && <p className='pesquisa'>{t('Local:')} {result.local}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSearch;
