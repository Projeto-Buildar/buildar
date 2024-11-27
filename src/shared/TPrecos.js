import i18n from 'i18next';

// Função para obter o idioma atual
const getCurrentLanguage = () => i18n.language;

// Função para formatar o número
const formatarPreco = (valor, pontoEVirgula) => {
  const [valorInteiro, valorDecimal] = valor.toFixed(2).split('.');
  const separadoMilhar = pontoEVirgula ? '.' : ',';
  const  separadorDecimal = pontoEVirgula ? ',' : '.';
  const inteiroFormatado = valorInteiro.replace(/\B(?=(\d{3})+(?!\d))/g, separadoMilhar);
  return `${inteiroFormatado}${separadorDecimal}${valorDecimal}`;
};

const TPrecos = (valor) => {
  const currentLanguage = getCurrentLanguage();

  let valorFinal;
  switch (currentLanguage) {
    case 'pt':
      valorFinal = formatarPreco(valor, true);
      return `R$${valorFinal}`;
    case 'en-US':
      const mediaDoDolar = 0.17;
      valorFinal = formatarPreco(valor * mediaDoDolar, false);
      return `$${valorFinal}`;
    case 'es-ES':
      const mediaDoBob = 1.18;
      valorFinal = formatarPreco(valor * mediaDoBob, true);
      return `Bs${valorFinal}`;
    default:
      return "$NaN";
  }
};

export default TPrecos;
