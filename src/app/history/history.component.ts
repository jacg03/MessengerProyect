import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  chats:any = [];
  service = new ChatsService();

  constructor() { }

  ngOnInit() {
    this.chats = this.service.getChats(); 
  }

  buscarChat(texto:string) {
    this.chats = this.service.getChatsByName(texto);
  }

}
