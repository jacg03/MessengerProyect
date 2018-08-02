import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  chats: any = [];
  service = new ChatsService();

  constructor(private route: Router) {}

  ngOnInit() {
    this.chats = this.service.getChats();
  }

  buscarChat(texto: string) {
    this.chats = this.service.getChatsByName(texto);
  }

  reloadInbox(id) {
    this.route.navigate(['/inbox', id]);
  }
}
