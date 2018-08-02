import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  Texto: String = 'este es mi mensaje';
  nombre:string;
  id:number;
  service = new ChatsService();

  constructor(private router:ActivatedRoute) {
    // if(router.snapshot.paramMap.get('id') != null)
    // {
    //   this.id = Number(router.snapshot.paramMap.get('id'));
    //   let result = this.service.getChatById(this.id);
    //   this.nombre = result.name;
    // }
   }

  ngOnInit() {
    this.router.params.subscribe( params => {
      if(this.service.getChatById(params['id']) != null) {
        let result = this.service.getChatById(params['id']);
        this.nombre = result.name;
      }
      else {
        let result = this.service.getChatById(1);
        this.nombre = result.name;
      }
    });
  }

  mostrartexto() {
    return this.Texto = 'este es el nuevo texto';
  }

}
