import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public messages: any = [
    {
      id: 1,
      text: 'Hola',
      isIncoming: true,
      chatId: 1
    },
    {
      id: 2,
      text: 'Que tal',
      isIncoming: false,
      chatId: 1
    },
    {
      id: 4,
      text: 'Que tal',
      isIncoming: true,
      chatId: 1
    },
    {
      id: 5,
      text: 'Que tal',
      isIncoming: true,
      chatId: 1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
