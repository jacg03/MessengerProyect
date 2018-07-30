import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  Texto: String = 'este es mi mensaje';
  constructor() { }

  ngOnInit() {
  }
  mostrartexto() {
    return this.Texto = 'este es el nuevo texto';
  }

}
