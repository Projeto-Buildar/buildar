export const tParaDialogos = (tiposChaves = {}, chave = {}, valor, tag) => {
    
    let chaveDeDialogo;
    if(tiposChaves.cutscene){
        chaveDeDialogo = "cutscenes.";
    } else {
        chaveDeDialogo = tiposChaves.npcs ? "npcs." : 'interacoes.';
    }

    const ultimaChave = tiposChaves.nome ? ".tNome" : `.texto${chave.n}`;
    let chaveFinal;

    if(tiposChaves.nome && chave.t === ""){
        chaveFinal = `corredor.` + "nomeValor";
    } else {
        chaveFinal = `corredor.` + chaveDeDialogo + chave.t + ultimaChave;
    }

    return {
        chave: chaveFinal, 
        valor: valor,
        tag: tag
    }
};
