import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string> = new EventEmitter();

  public href!: string;
  termino:string = "";

  constructor(private router: Router) { }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  ngOnInit(): void {
    this.href = this.router.url.replace("/","");
    switch (this.href) {
      case "region":
        this.href = "por región";
        break;
      case "capital":
        this.href = "por capital";
        break;
      default:
        this.href = "por país";
        break;
    }
  }

}
