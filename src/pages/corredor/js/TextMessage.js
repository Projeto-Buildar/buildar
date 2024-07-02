import React, { useState, useEffect, useRef } from 'react';
import KeyPressListener from './KeyPressListener';
import './textMessage.css'
import useControleDeTraducao from '../../../useControleDeTraducao';

function TextMessage({ text, onComplete, nome }) {
    const [show, setShow] = useState(true);
    const keyPressListenerRef = useRef(null);
    const { t, tComControleDeLinha } = useControleDeTraducao();
    useEffect(() => {
        const keyPressListener = new KeyPressListener("Enter", () => {
            setShow(false);
            onComplete();
        });
        keyPressListenerRef.current = keyPressListener;

        return () => {
            keyPressListenerRef.current.unbind();
        };
    }, [onComplete]);

    if (!show) {
        return null;
    }

    return (
        <div className="TextMessage">
            <div>
                <p className='nomeDialogo'>{nome}</p>
                <p className="TextMessage_p">{t(text)}</p>
            </div>
            <button className="TextMessage_button" onClick={() => { setShow(false); onComplete(); }}>Próximo</button>
        </div>
    );
}

export default TextMessage;
