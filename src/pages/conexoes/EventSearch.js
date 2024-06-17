import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './EventSearch.css';

function EventSearch() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const eventos = [
    { nome: t('events2.effectiveComm'), data: '2024-06-10', horario: '10:00', local: 'Centro de Convenções Anhembi' },
    { nome: t('events2.timeMgmt'), data: '2024-06-11', horario: '14:00', local: 'Expo Center Norte' },
    { nome: t('events2.teamWork'), data: '2024-06-12', horario: '09:00', local: 'Centro de Convenções Rebouças' },
    { nome: t('events2.leadership'), data: '2024-06-13', horario: '13:00', local: 'Hotel Unique' },
    { nome: t('events2.conflictRes'), data: '2024-06-14', horario: '11:00', local: 'Centro Cultural São Paulo' },
    { nome: t('events2.nonViolentComm'), data: '2024-06-15', horario: '15:00', local: 'Sesc Paulista' },
    { nome: t('events2.timeMgmtLead'), data: '2024-06-16', horario: '16:00', local: 'Teatro Municipal' },
    { nome: t('events2.collabTeamWork'), data: '2024-06-17', horario: '10:00', local: 'Biblioteca Mário de Andrade' },
    { nome: t('events2.presentationTech'), data: '2024-06-18', horario: '09:00', local: 'Casa das Rosas' },
    { nome: t('events2.constructiveFeed'), data: '2024-06-19', horario: '14:00', local: 'Museu do Ipiranga' },
    { nome: t('events2.activeListening'), data: '2024-06-20', horario: '13:00', local: 'Parque do Ibirapuera' },
    { nome: t('events2.empathy'), data: '2024-06-21', horario: '11:00', local: 'Centro Cultural Vergueiro' },
    { nome: t('events2.selfMgmt'), data: '2024-06-22', horario: '10:00', local: 'Espaço das Américas' },
    { nome: t('events2.interpersonalComm'), data: '2024-06-23', horario: '15:00', local: 'Instituto Tomie Ohtake' },
    { nome: t('events2.conflictMgmt'), data: '2024-06-24', horario: '09:00', local: 'Auditório Ibirapuera' },
    { nome: t('events2.emotionalInt'), data: '2024-06-25', horario: '14:00', local: 'Centro de Convenções Imigrantes' },
    { nome: t('events2.assertiveComm'), data: '2024-06-26', horario: '13:00', local: 'Centro de Convenções Frei Caneca' },
    { nome: t('events2.teamChallenges'), data: '2024-06-27', horario: '16:00', local: 'Hotel Maksoud Plaza' },
    { nome: t('events2.productivityFocus'), data: '2024-06-28', horario: '10:00', local: 'Espaço Hakka' },
    { nome: t('events2.leadershipTeamMgmt'), data: '2024-06-29', horario: '09:00', local: 'Centro de Convenções São Paulo' }
  ];

  const handleSearch = () => {
    if (query.trim() === '') {
      setResults([{ nome: t('eventSearch.searchPrompt'), data: '', horario: '', local: '' }]);
    } else {
      const filteredEvents = eventos.filter(evento =>
        evento.nome.toLowerCase().includes(query.toLowerCase())
      );

      if (filteredEvents.length > 0) {
        setResults(filteredEvents);
      } else {
        setResults([{ nome: t('eventSearch.noResult'), data: '', horario: '', local: '' }]);
      }
    };
  }

  return (
    <div className="containerPesquisar">
      <h3>{t('eventSearch.header')}</h3>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('eventSearch.placeholder')}
          className="input"
        />
        <button onClick={handleSearch} className="buttonPesquisar">{t('eventSearch.button')}</button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <div className="result-header">
              <h4>{result.nome}</h4>
            </div>
            <div className="result-details">
              {result.data && <p>Data: {result.data}</p>}
              {result.horario && <p>Horário: {result.horario}</p>}
              {result.local && <p>Local: {result.local}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSearch;