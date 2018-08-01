import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private chats:any = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Standaard_Nederlandsche_SS.svg/1200px-Standaard_Nederlandsche_SS.svg.png",
      name: "Alejandro Ramirez Perez",
      message: "Entonces vas a ir o no?",
      hour: "13:35"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Standaard_Nederlandsche_SS.svg/1200px-Standaard_Nederlandsche_SS.svg.png",
      name: "Alejandro Ramirez Sanchez",
      message: "Entonces vas a ir o no?",
      hour: "13:35"
    }
  ];

  constructor() { }

  getChats() {
    return this.chats;
  }

  getChatsByName( texto:string ) {
    texto = texto.toLowerCase();
    let result:any = [];
    for(let chat of this.chats){    
      let name = chat.name.toLowerCase();
      // let autor = chat.autor.toLowerCase();

      if( name.indexOf( texto ) >= 0 ){
        result.push(chat);
      }
    }

    return result;
  }

}
