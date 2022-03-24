export class Pets{
    name: string;
    id: number;
    regiao: string;
    img: string;
    visible: boolean = false;

    constructor(name: string, id: number, regiao: string, img: string){
        this.name = name;
        this.id = id;
        this.regiao = regiao;
        this.img = img;
    }
}