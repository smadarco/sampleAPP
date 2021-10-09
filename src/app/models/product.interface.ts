export interface IProduct {
    id :number;
    name : string; //(string, up to 30 characters, mandatory)
    description : string; //(string, up to 200 characters, optional)
    price : number; //(number, larger than zero, mandatory)
    creation : Date | number | string; //(Date, mandatory)
    img:string;
    selected:boolean;

}