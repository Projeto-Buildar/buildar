// Importações
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from './images/logo_on.webp';
import visa from './images/Visa.webp';
import mastercard from './images/Mastercard.webp';
import hipercard from './images/Hipercard.webp';
import elo from './images/Elo.webp';
import cartaoIcon from './images/cartão_icon.webp';
import pixIcon from './images/logo-pix.webp';
import Header from '../landingPage/components/Header/Header';
import './pagamento.css';

// Componente Pagamento
export default function Pagamento() {
  const [cpf, setCpf] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Manipula mudanças no CPF
  const handleCpfChange = (event) => {
    const { value } = event.target;
    let cleanedValue = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    let formattedValue = cleanedValue;

    // Adiciona os pontos e o traço no CPF
    if (cleanedValue.length > 3 && cleanedValue.length <= 6) {
      formattedValue = `${cleanedValue.slice(0, 3)}.${cleanedValue.slice(3)}`;
    } 
    else if (cleanedValue.length > 6 && cleanedValue.length <= 9) {
      formattedValue = `${cleanedValue.slice(0, 3)}.${cleanedValue.slice(3, 6)}.${cleanedValue.slice(6)}`;
    } 
    else if (cleanedValue.length > 9) {
      formattedValue = `${cleanedValue.slice(0, 3)}.${cleanedValue.slice(3, 6)}.${cleanedValue.slice(6, 9)}-${cleanedValue.slice(9, 11)}`;
    }

    setCpf(formattedValue);
  };

  // Manipula seleção do método de pagamento
  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Renderização do componente
  return (
    <main className="main-container" id='Pagamento'>
      <Header className="pagamentoHeader" />
      <div id='formPagamento'>
        <h1>Pagamento</h1>
        <h2>Escolha a forma de pagamento</h2>
        <div className="payment-icons">
          <img src={visa} alt="Visa" className="card-icon" />
          <img src={hipercard} alt="Hypercard" className="card-icon" />
          <img src={elo} alt="Elo" className="card-icon" />
          <img src={mastercard} alt="Mastercard" className="card-icon" />
        </div>
        <div className="payment-method-container">
          <div
            className={`payment-option ${selectedPaymentMethod === 'debit' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('debit')}
          >
            <button className="payment-button"></button>
            <img src={cartaoIcon} alt="cartão de debito" className="payment-icon" />
            <p>Débito</p>
          </div>
          <div
            className={`payment-option ${selectedPaymentMethod === 'credit' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('credit')}
          >
            <button className="payment-button"></button>
            <img src={cartaoIcon} alt="cartão de credito" className="payment-icon" />
            <p>Crédito</p>
          </div>
          <div
            className={`payment-option ${selectedPaymentMethod === 'pix' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('pix')}
          >
            <button className="payment-button"></button>
            <img src={pixIcon} alt="pix" className="payment-icon-pix" />
            <p>Pix</p>
          </div>
        </div>
        <form className="payment-form">
          <input type="text" inputMode="numeric" pattern="\d{13,19}" placeholder="Número do cartão" className="form-input" />
          <input type="text" inputMode="numeric" maxLength="4" minLength="3" pattern="\d*" title="Digite o código CVV de 3 ou 4 dígitos do seu cartão" placeholder="CVV" className="half-width" />
          <div className="date-input-container">
            <input type="date" placeholder="DD/MM/AA" className="date-input" />
          </div>
          <input type="text" placeholder="Nome" className="half-width" />
          <input type="text" placeholder="Sobrenome" className="half-width" />
          <input
            type="text"
            inputMode="numeric"
            value={cpf}
            onChange={handleCpfChange}
            maxLength="14"
            placeholder="CPF"
            className="half-width"
          />
          <div className="date-input-container">
            <input type="date" placeholder="DD/MM/AA" className="date-input" />
          </div>
          <button type="submit" className="submit-button">Finalizar Compra</button>
        </form>
      </div>
    </main>
  );
}
