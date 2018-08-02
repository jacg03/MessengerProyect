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
    },
    {
      id: 3, 
      text: "Que haces",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 4, 
      text: "Hago tarea",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 5, 
      text: "Tienes mucha tarea? Puedes pasar por mi a las 4?",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 6, 
      text: "No te preocupes, si tengo tarea pero igual tengo tiempo de pasar por ti",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 7, 
      text: "Muy bien, gracias. Me ayudarías mucho porque los caminones se tardan mucho para pasar",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 8, 
      text: "Tal vez llegue a las 4 15",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 9, 
      text: "A las 4 15 esta perfecto",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 10, 
      text: "Ahi te veo",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 11, 
      text: "Hola",
      isIncoming: false,
      chatId: 2
    },
    {
      id: 12, 
      text: "Hey",
      isIncoming: true,
      chatId: 2
    },
    {
      id: 13, 
      text: "Estas entu casa?",
      isIncoming: false,
      chatId: 2
    },
    {
      id: 14, 
      text: "Si, por?",
      isIncoming: true,
      chatId: 2
    },{
      id: 15, 
      text: "Nada mas?",
      isIncoming: false,
      chatId: 2
    },{
      id: 16, 
      text: "AOK jeje?",
      isIncoming: true,
      chatId: 2
    },{
      id: 17, 
      text: "Vas  air a la fiesta?",
      isIncoming: false,
      chatId: 2
    },{
      id: 18, 
      text: "No se tu?",
      isIncoming: true,
      chatId: 2
    },{
      id: 19, 
      text: "Pues si quiero pero no se porque ahi va a estra Maria y no me cae bien",
      isIncoming: false,
      chatId: 2
    },{
      id: 20, 
      text: "Pues vamos a que hora paso por ti",
      isIncoming: true,
      chatId: 2
    },{
      id: 21, 
      text: "Espera",
      isIncoming: false,
      chatId: 2
<<<<<<< HEAD
=======
    },
    {
      id: 22, 
      text: "Estas entu casa?",
      isIncoming: false,
      chatId: 2
    },
    {
      id: 23, 
      text: "Si, por?",
      isIncoming: true,
      chatId: 2
    },{
      id: 24, 
      text: "Nada mas?",
      isIncoming: false,
      chatId: 2
    },{
      id: 25, 
      text: "AOK jeje?",
      isIncoming: true,
      chatId: 2
    },{
      id: 26, 
      text: "Vas  air a la fiesta?",
      isIncoming: false,
      chatId: 2
    },{
      id: 27, 
      text: "No se tu?",
      isIncoming: true,
      chatId: 2
    },{
      id: 28, 
      text: "Pues si quiero pero no se porque ahi va a estra Maria y no me cae bien",
      isIncoming: false,
      chatId: 2
    },{
      id: 29, 
      text: "Pues vamos a que hora paso por ti",
      isIncoming: true,
      chatId: 2
    },{
      id: 30, 
      text: "Espera",
      isIncoming: false,
      chatId: 2
    },
    {
      id: 31, 
      text: "Hago tarea",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 32, 
      text: "Tienes mucha tarea? Puedes pasar por mi a las 4?",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 33, 
      text: "No te preocupes, si tengo tarea pero igual tengo tiempo de pasar por ti",
      isIncoming: false,
      chatId: 1
    },
    {
      id: 34, 
      text: "Muy bien, gracias. Me ayudarías mucho porque los caminones se tardan mucho para pasar",
      isIncoming: true,
      chatId: 1
    },
    {
      id: 35, 
      text: "Tal vez llegue a las 4 15",
      isIncoming: false,
      chatId: 1
>>>>>>> development
    }
    
  ];

  constructor() { }

  public getMessagesByChatId(chatId:number) {
    let result = [];
    for(let item of this.messages){
      if(item.chatId == chatId){
        result.push(item)
      }
    }
    result = result.sort(function (a, b) {
      return (a.id - b.id)
    });

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
