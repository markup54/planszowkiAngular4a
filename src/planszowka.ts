import { rodzajePlanszowek } from "./rodzaje";

export class Planszowka{
    private _nazwa:string;
    private _rodzaj:rodzajePlanszowek;
    private _maxliczbaGraczy:number;
	private _minliczbaGraczy:number;
	private _foto:string
	private _liczbaRozegranychPartii:number;
     public constructor(naz:string,rodz:rodzajePlanszowek,maxg:number, ming:number, foto:string){
        this._nazwa = naz;
        this._rodzaj= rodz;
        this._maxliczbaGraczy = maxg;
        this._minliczbaGraczy = ming;
        this._foto = foto;
        this._liczbaRozegranychPartii = 0;
     }

     get nazwa(){
        return this._nazwa;
     } 
     get rodzaj(){
        return this._rodzaj;
     }
     get foto(){
        return this._foto;
     }
     get maxliczbaGraczy(){
        return this._maxliczbaGraczy;
     }
     get minliczbaGraczy(){
        return this._minliczbaGraczy;
     }
     get liczbaRozegranychPartii(){
        return this._liczbaRozegranychPartii;
     }
     set liczbaRozegranychPartii(value:number){
        this._liczbaRozegranychPartii = value;
     }
     zwiekszLiczbePartii():void{
        this._liczbaRozegranychPartii++;
     }
}
