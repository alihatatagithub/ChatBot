import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../Message';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap : any = {
    "ChatOrHuman": "Chat,Human",
    "Chat": "Chatbot,AIChat",
    "Human": "Man,Woman",
    "What is your name": "My name is Targemly System",
    "What is your role": "Just guide for the user",
    "defaultmsg": "Final Message"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg,0,true,true,0,'',[]);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg),0,true,true,0,'',[]);
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
