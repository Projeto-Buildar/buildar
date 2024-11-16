import { sanitizeInput } from "./sanitizeInput";

export const setNomeUsuario = (nome = {}) => {
    if (nome.valor !== "") {
        const nomeSanitizado = sanitizeInput(nome.valor)
        const nomeFinal = nome.apelido
            ? nomeSanitizado
            : nomeSanitizado.toString().split("@")[0];
        sessionStorage.setItem("nomeUsuario", nomeFinal);
    }
};

export const getNomeUsuario = () => {
    return sessionStorage.getItem("nomeUsuario") || "Vivi";
};

