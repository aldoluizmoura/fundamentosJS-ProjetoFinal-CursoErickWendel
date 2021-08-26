class JogoDaMemoria {

    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/ciclop.png', nome: 'ciclop' },
            { img: './arquivos/deadpool.png', nome: 'deadpool' },
            { img: './arquivos/homemaranha.png', nome: 'homemaranha' }
        ]

        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []

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

        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1500);
    }

    esconderHerois(herois){
        const heroisOcultos = herois.map(( {nome, id}) => ({
            id, nome, img: this.iconePadrao
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }

    jogar(){
       this.embaralhar()
    }


}