import { Component, OnInit } from '@angular/core';
import { BankMessageService } from './bank-message.service';
import { BankMessage } from './BankMessage';

@Component({
  selector: 'app-bank-qchat',
  templateUrl: './bank-qchat.component.html',
  styleUrls: ['./bank-qchat.component.css']
})
export class BankQChatComponent implements OnInit {

  messages: BankMessage[] = [];
  value: string='';
  items:Map<string,string> = new Map<string,string>;
  constructor(public chatService: BankMessageService) { }
  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
      console.log(this.messages)
    });
    this.items = this.chatService.messageMap;
  }
  sendMessage(key:string) {
    this.value = key;
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
}
