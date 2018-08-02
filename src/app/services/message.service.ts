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

  public getMessagesByChatId(chatId:number) {
    let result = [];
    for(let item of this.messages){
      if(item.chatId = chatId){
        result.push(item)
      }
    }
    // result = result.sort(function (a, b) {
    //   return (a.chatId - b.chatId)
    // });

    return result;
  }

  public postMessage(text:string, chatId:number) {
    let obj:any = {
      id: this.messages.length + 1 ,
      text: text,
      isIncoming: true,
      chatId: chatId
    };

    this.messages.push(obj);
    console.log(this.messages);
  }
}
