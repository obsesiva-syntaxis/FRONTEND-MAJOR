export interface Maquina {
    _id?: string;
    nombre: string;
    modelo: string;
    descripcion: string;
    marca: string;
    caracteristica: {
        potMax: string,
        potCont: string,
        combustible: string,
        partida: string,
        fases: string
    }
    imgUrl: string;

}