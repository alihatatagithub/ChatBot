import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TestComponent } from './test/test.component';
import { BankQChatComponent } from './bank-qchat/bank-qchat.component';

const routes: Routes = [
  {path:'chatbot',component:ChatbotComponent},
  {path:'',component:BankQChatComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    TestComponent,
    BankQChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
