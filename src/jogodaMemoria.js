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
        this.heroisSelecionados = []

    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarClickVerificarSelecao(this.verificarSelecao.bind(this))
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

    verificarSelecao(id, nome){
        const item = {id, nome }
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [ opcao1 ] = this.heroisSelecionados
                this.heroisSelecionados = []  
                if(opcao1.nome === item.nome && opcao1.id !== item.id){
                    this.exbirHerois(item.nome)
                    this.tela.ExibirMensagem()
                   // alert('combinação correta', + item.nome)
                    return;
                }  
                this.tela.ExibirMensagem(false)
                break;
            }
     
    }

    esconderHerois(herois){
        const heroisOcultos = herois.map(( {nome, id}) => ({
            id, nome, img: this.iconePadrao
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }

    exbirHerois(nomeDoHeroi){

        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        this.tela.exbirHerois(nomeDoHeroi, img)
    }   

    jogar(){
       this.embaralhar()
    }

   


}