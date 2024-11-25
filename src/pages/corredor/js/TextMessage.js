import React, { useState, useEffect, useRef } from 'react';
import KeyPressListener from './KeyPressListener';
import './textMessage.css'
import useControleDeTraducao from '../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../shared/TranslationTagsComPrefixo';
import { useParams } from "react-router-dom";

function TextMessage({ text, onComplete, nome }) {
    const { mapaNome } = useParams();
    const [show, setShow] = useState(true);
    const keyPressListenerRef = useRef(null);
    const { t } = useControleDeTraducao();
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

    const propriedadeTTag = (value) => {
        let chaveFinal;

        if (typeof value === "object") {
            let chave = value.chave.split(".");

            if (chave.length > 2) {
                chave[0] += `.${mapaNome}`;
            }

            chaveFinal = chave.join(".");

        } else {
            chaveFinal = value;
        }
        console.log(value.tag)
        return {
            i18nKey: chaveFinal,
            values: { valor: value.valor },
            components: value.tag,
        }
    }

    return (
        <div className="TextMessage">
            <div>
                <p className='nomeDialogo rainbow-text'>
                    <TComTag
                        {...propriedadeTTag(nome)}
                    />
                </p>
                <p className="TextMessage_p">
                    <TComTag
                        {...propriedadeTTag(text)}
                    />
                </p>
            </div>
            <button className="TextMessage_button" onClick={() => { setShow(false); onComplete(); }}>{t("corredor.proximo")}</button>
        </div>
    );
}

export default TextMessage;
