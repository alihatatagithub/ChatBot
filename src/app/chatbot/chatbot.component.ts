import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../Message';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})

export class ChatbotComponent implements OnInit {
  @ViewChild('scroll', { static: true }) scroll: any;

  Answers:Message[]=[];
  chat:Message = new Message('user','Human Or Chat',1,false,true,0,'',['Human','Chat']);
  chat2:Message = new Message('bot','Human',2,true,true,1,'',['Man','Woman']);
  chat3:Message = new Message('user','Chat',3,true,true,1,'',['Chat1','Chat2']);


  constructor(public chatService: ChatbotService) {

    this.Answers.push(this.chat);

    this.Answers.push(this.chat2);


    this.Answers.push(this.chat3);
  }


  messages: Message[] = [];
  value: string = '';
  select:string='';


  ngOnInit(): void {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

  }

  sendMessage(subitem:string) {
    console.log('hi'+subitem)
    this.value = subitem;
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  // ngAfterViewChecked(): void {

  //   this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  //   }
}
