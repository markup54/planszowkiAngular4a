import { Component, OnInit,Input } from '@angular/core';
import { Planszowka } from 'src/planszowka';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  @Input() wyswietlanaPlanszowka!:Planszowka;
  constructor() { }

  ngOnInit(): void {
  }

}
