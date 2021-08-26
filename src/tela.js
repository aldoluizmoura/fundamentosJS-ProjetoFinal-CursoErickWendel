const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
class Tela {

    static ObterCodigoHtml(item) {

        return ` <div class="col-md-3">
                    <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                        <img src="${item.img}" name="${item.nome}" class="card-img-top">        
                    </div>
                    <br />
                </div>
                `
    }

    static configurarClickVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }

    static alterarConteudoHtml(codigohtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigohtml
    }


    static GerarStringPelaImagem(itens) {
        return itens.map(Tela.ObterCodigoHtml).join('')
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.GerarStringPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
    



}