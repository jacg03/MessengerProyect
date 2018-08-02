import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../services/chats.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  id:string;
  texto:string;

  constructor(private router:ActivatedRoute, private service:ChatsService, private serviceMessage:MessageService) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      if(this.service.getChatById(params['id']) != null) {
        let result = this.service.getChatById(params['id']);
        this.id = result.id;
      }
      else {
        this.id = "1";
      }
    });
  }

  postMessage(){
    this.serviceMessage.postMessage(this.texto, Number(this.id));
    this.texto = "";
  }
}
