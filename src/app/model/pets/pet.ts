export class Pets{
    nome: string;
    cod_pet?: number;
    regiao: string;
    img: string;
    visible: boolean = false;

    constructor(name: string, regiao: string, img: string, id?: number){
        this.nome = name;
        this.cod_pet = id;
        this.regiao = regiao;
        this.img = img;
    }
}