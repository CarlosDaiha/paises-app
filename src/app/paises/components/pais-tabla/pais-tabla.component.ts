import { Component, Input, OnInit, Output } from '@angular/core';
import { Countries } from '../../interfaces/pais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Countries[] = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
