import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages:any = [
    {
      id: 1,
      text: "Hola",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 2, 
      text: "Que tal",
      isIncoming: false,
      chatId: 1
    }
  ];

  constructor() { }
}
