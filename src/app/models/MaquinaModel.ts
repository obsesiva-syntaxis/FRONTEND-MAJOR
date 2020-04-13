export class MaquinaModel {
    constructor(
        public nombre: string,
        public modelo: string,
        public descripcion: string,
        public marca: string,
        public potMax: string,
        public potCont: string,
        public combustible: string,
        public partida: string,
        public fases: string,
        public imgUrl: string
    ){}
}