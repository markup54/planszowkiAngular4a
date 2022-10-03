import { Component } from '@angular/core';
import { Planszowka } from 'src/planszowka';
import { PLANSZOWKI } from 'src/planszowki';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planszowki';
  planszowki:Planszowka[] = PLANSZOWKI;
  konkretnaPlanszowka!:Planszowka;
  szczeg(gra:Planszowka):void{
    this.konkretnaPlanszowka = gra;
  }
}
