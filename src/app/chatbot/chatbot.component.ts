import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeService } from '../test/test.service';
import { Tree } from '../test/Tree';
import { TreeDto } from '../test/TreeDto';
import { TreeVM } from '../test/TreeVM';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})

export class ChatbotComponent implements OnInit {
  @ViewChild('scroll', { static: true }) scroll: any;

  AllParent:Tree[]=[] ;
  TreeVMS:TreeVM[] = [];
  AllChildren:TreeDto[]=[];
  AllChildren2:TreeDto[]=[];
  counter:number=0;
 constructor(private service:TreeService) {


 }


 ngOnInit(): void {
   this.service.GetAllParents().subscribe((a :any )=> {
     this.AllParent = a;
    },error => {
      console.log(error);
    })

 }

 GetChildrenByParentId(id:number,name:string){

   this.service.GetChildrenByParentId(id).subscribe((a:TreeDto[]) =>{
     this.AllChildren = a;
   },error => {
     console.log(error);
   }, () => {

    let newTreeVM:TreeVM= new TreeVM();

     for (let index = 0; index < this.AllChildren.length; index++) {
      let newTreeDto = this.AllChildren[index];
      newTreeVM.TreeDto.push(newTreeDto);

     }

    newTreeVM.Selected.push(name);

     this.TreeVMS.push(newTreeVM);

   })
 }

  ngAfterViewChecked(): void {

    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    }
}
