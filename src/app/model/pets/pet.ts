export class Pets{
    nome: string;
    cod_pet: number;
    regiao: string;
    img: string;
    visible: boolean = false;

    constructor(name: string, id: number, regiao: string, img: string){
        this.nome = name;
        this.cod_pet = id;
        this.regiao = regiao;
        this.img = img;
    }
}