class JogoDaMemoria {

    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/ciclop.png', nome: 'ciclop' },
            { img: './arquivos/deadpool.png', nome: 'deadpool' },
            { img: './arquivos/homemaranha.png', nome: 'homemaranha' }
        ]

    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
    }

    jogar(){
       this.embaralhar()
    }


}