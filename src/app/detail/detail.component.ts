import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  nombre:string;
  
  constructor(private router:ActivatedRoute, private service:ChatsService) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      let result = this.service.getChatById(params['id']);
      this.nombre = result.name;
    });
  }

}
