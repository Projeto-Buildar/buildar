import React, { useEffect, useState } from 'react';

const VLibras = () => {
  const [vLibrasLoaded, setVLibrasLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'vlibras-script';
    const version = new Date().getTime(); // Usando um timestamp para evitar cache

    const loadVLibras = () => {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://vlibras.gov.br/app/vlibras-plugin.js?v=${version}`;
      script.async = true;

      script.onload = () => {
        console.log('VLibras script loaded');
        if (window.VLibras && typeof window.VLibras.Widget === 'function') {
          console.log('VLibras.Widget is available');
          new window.VLibras.Widget({playerContainer: 'body'});
          setVLibrasLoaded(true);
        } else {
          console.error('VLibras.Widget is not available after script load');
        }
      };

      script.onerror = () => {
        console.error('Failed to load VLibras script');
      };

      document.body.appendChild(script);
      console.log('Script appended to body');
    };

    if (!document.getElementById(scriptId)) {
      console.log('VLibras script not found, loading...');
      loadVLibras();
    } else {
      console.log('VLibras script already exists');
      document.getElementById(scriptId).remove();
      loadVLibras();
    }
  }, []);

  return (
    <div vw={vLibrasLoaded ? 'true' : 'false'} className={vLibrasLoaded ? 'enabled' : 'disabled'}>
      {vLibrasLoaded && (
        <>
          <div vw-access-button="true" className="active"></div>
          <div vw-plugin-wrapper="true">
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default VLibras;
