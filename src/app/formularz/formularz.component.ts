import { Component, OnInit } from '@angular/core';
import { Planszowka } from 'src/planszowka';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

  dodawanaPlanszowka!:Planszowka;
  nazwa:string = "";
  maxgraczy:number=0;
  mingraczy:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
