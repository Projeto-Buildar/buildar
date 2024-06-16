// import { useEffect } from 'react';

// const AssistiveScriptLoader = () => {
//   useEffect(() => {
//     if (!window.assistive) {
//       const script = document.createElement('script');
//       script.charset = 'UTF-8';
//       script.src = 'https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js';
//       script.async = true;

//       script.onload = () => {
//         console.log('Script Assistive carregado.');
//         if (window.assistive) {
//           window.assistive.init({});
//         }
//       };

//       script.onerror = () => {
//         console.error('Erro ao carregar o script Assistive.');
//       };

//       document.body.appendChild(script);
//     }
//   }, []);

//   return null;
// };

// export default AssistiveScriptLoader;
