import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BankMessage } from './BankMessage';

@Injectable({
  providedIn: 'root'
})
export class BankMessageService {
  constructor() {}
  conversation = new Subject<BankMessage[]>();
  messageMap : any = {
    "ChatOrHuman": "Chat,Human",
    "Chat": "Chatbot,AIChat",
    "Human": "Man,Woman",
    "What is your name": "My name is Targemly System",
    "What is your role": "Just guide for the user",
    "defaultmsg": "Final Message"
  }
  getBotAnswer(msg: string) {
    const userMessage = new BankMessage('user', msg,0);
    this.conversation.next([userMessage]);
    const botMessage = new BankMessage('bot', this.getBotMessage(msg),0);
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
