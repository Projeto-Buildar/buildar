import React, { useState } from 'react';
import './EventSearch.css'; // Importe o arquivo CSS

function EventSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const eventos = [
    { nome: 'Comunicação Eficaz no Ambiente de Trabalho', data: '2024-06-10', horario: '10:00', local: 'Centro de Convenções Anhembi' },
    { nome: 'Gestão de Tempo e Produtividade', data: '2024-06-11', horario: '14:00', local: 'Expo Center Norte' },
    { nome: 'Trabalho em Equipe: Estratégias e Práticas', data: '2024-06-12', horario: '09:00', local: 'Centro de Convenções Rebouças' },
    { nome: 'Liderança e Comunicação', data: '2024-06-13', horario: '13:00', local: 'Hotel Unique' },
    { nome: 'Resolução de Conflitos no Trabalho', data: '2024-06-14', horario: '11:00', local: 'Centro Cultural São Paulo' },
    { nome: 'Comunicação Não Violenta', data: '2024-06-15', horario: '15:00', local: 'Sesc Paulista' },
    { nome: 'Gestão de Tempo para Líderes', data: '2024-06-16', horario: '16:00', local: 'Teatro Municipal' },
    { nome: 'Colaboração e Trabalho em Equipe', data: '2024-06-17', horario: '10:00', local: 'Biblioteca Mário de Andrade' },
    { nome: 'Técnicas de Apresentação', data: '2024-06-18', horario: '09:00', local: 'Casa das Rosas' },
    { nome: 'Feedback Construtivo', data: '2024-06-19', horario: '14:00', local: 'Museu do Ipiranga' },
    { nome: 'Escuta Ativa no Trabalho', data: '2024-06-20', horario: '13:00', local: 'Parque do Ibirapuera' },
    { nome: 'Empatia e Relações Profissionais', data: '2024-06-21', horario: '11:00', local: 'Centro Cultural Vergueiro' },
    { nome: 'Autogestão e Produtividade', data: '2024-06-22', horario: '10:00', local: 'Espaço das Américas' },
    { nome: 'Comunicação Interpessoal', data: '2024-06-23', horario: '15:00', local: 'Instituto Tomie Ohtake' },
    { nome: 'Gestão de Conflitos', data: '2024-06-24', horario: '09:00', local: 'Auditório Ibirapuera' },
    { nome: 'Inteligência Emocional no Trabalho', data: '2024-06-25', horario: '14:00', local: 'Centro de Convenções Imigrantes' },
    { nome: 'Comunicação Assertiva', data: '2024-06-26', horario: '13:00', local: 'Centro de Convenções Frei Caneca' },
    { nome: 'Trabalho em Equipe: Desafios e Soluções', data: '2024-06-27', horario: '16:00', local: 'Hotel Maksoud Plaza' },
    { nome: 'Produtividade e Foco', data: '2024-06-28', horario: '10:00', local: 'Espaço Hakka' },
    { nome: 'Liderança e Gestão de Equipes', data: '2024-06-29', horario: '09:00', local: 'Centro de Convenções São Paulo' }
  ];

  const handleSearch = () => {
    if (query.trim() === '') {
      setResults([{ nome: 'Por favor, digite um termo de pesquisa.', data: '', horario: '', local: '' }]);
      return;
    }

    const filteredEvents = eventos.filter(evento =>
      evento.nome.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredEvents.length > 0) {
      setResults(filteredEvents);
    } else {
      setResults([{ nome: 'Nenhum evento encontrado.', data: '', horario: '', local: '' }]);
    }
  };

  return (
    <div className="containerPesquisar">
      <h3>EVENTOS EXTERNOS - Pesquisa de Eventos</h3>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do evento"
          className="input"
        />
        <button onClick={handleSearch} className="buttonPesquisar">Pesquisar</button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <h4>{result.nome}</h4>
            {result.data && <p>Data: {result.data}</p>}
            {result.horario && <p>Horário: {result.horario}</p>}
            {result.local && <p>Local: {result.local}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSearch;
