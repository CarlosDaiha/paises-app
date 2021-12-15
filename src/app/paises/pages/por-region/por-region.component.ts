import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino:string = "";
  error:boolean = false;
  paises: Countries[] = new Array();

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarRegion(this.termino)
    .subscribe((resp) => {
      console.log(resp);
      this.paises = resp;
    }, (err) => {
      this.error = true;
    });
  }

  ngOnInit(): void {
    this.paisService.buscarTodos()
    .subscribe((resp) => {
      this.paises = resp;
    }, (err) => {
      this.error = true;
    });
  }

}
