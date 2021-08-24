class JogoDaMemoria{

    constructor({tela}){
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/ciclop.png', nome: 'ciclop'},
            { img: './arquivos/deadpool.png', nome: 'deadpool'},
            { img: './arquivos/homemaranha.png', nome: 'homemaranha'}
        ]

        }

        inicializar(){
            this.tela.atualizarImagens(this.heroisIniciais)
        }
    

}