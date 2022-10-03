import { Planszowka } from "./planszowka";
import { rodzajePlanszowek } from "./rodzaje";

export const PLANSZOWKI:Planszowka []= [
    new Planszowka("Szachy",rodzajePlanszowek.a,3,3,"assets/gra4.jpg"),
    new Planszowka("Dixit",rodzajePlanszowek.d,12,3,"assets/gra1.png"),
    new Planszowka("Wsiąść do pociągu Europa",rodzajePlanszowek.a,5,3,"assets/gra2.jpg"),
    new Planszowka("Spadające małpki",rodzajePlanszowek.c,6,2,"assets/gra2.jpg")
]