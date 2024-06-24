import React, { useState, useEffect, useRef } from 'react';
import KeyPressListener from './KeyPressListener';
import './textMessage.css'

function TextMessage({ text, onComplete }) {
    const [show, setShow] = useState(true);
    const keyPressListenerRef = useRef(null);

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
            <p className="TextMessage_p">{text}</p>
            <button className="TextMessage_button" onClick={() => { setShow(false); onComplete(); }}>Proximo</button>
        </div>
    );
}

export default TextMessage;
