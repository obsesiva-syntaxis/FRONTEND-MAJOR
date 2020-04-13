export interface Hidraulica {
    _id?: string;
    nombre: string;
    modelo: string;
    descripcion: string;
    marca: string;
    caracteristica: {
        potMax: string,
        sucDes: string,
        altMax: string,
        cauMax: string,
        volt: string,
        sucMax: string
    }
    imgUrl: string;

}