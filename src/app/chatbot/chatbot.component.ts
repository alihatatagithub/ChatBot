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
  // model:TreeDto = new TreeDto();
  TreeVMS:TreeVM[] = [];
  TreeVm:TreeVM = new TreeVM();
  AllChildren:TreeDto[]=[];
  AllChildren2:TreeDto[]=[];
 constructor(private service:TreeService) {


 }


 ngOnInit(): void {
   this.service.GetAllParents().subscribe((a :any )=> {
     this.AllParent = a;
    },error => {
      console.log(error);
    }, ()=>{
      // for (let index = 0; index < this.AllParent.length; index++) {
      //   var model = new TreeDto();
      //   model.id = this.AllParent[index].id;
      //   model.hasChildren = true;
      //   model.name = this.AllParent[index].name;
      //   model.parentId = undefined;
      //  this.AllChildren2.push(model) ;


      // }
    })

 }

 GetChildrenByParentId(id:number,name:string){
  for (let index = 0; index < this.TreeVm.TreeDto.length; index++) {
    this.TreeVm.TreeDto.splice(index,index+1);

  }
   this.service.GetChildrenByParentId(id).subscribe((a:any) =>{
     this.AllChildren = a;
   },error => {
     console.log(error);
   }, () => {
     for (let index = 0; index < this.AllChildren.length; index++) {
      //  this.AllChildren2.push(this.AllChildren[index]);
       this.TreeVm.TreeDto.push(this.AllChildren[index]);
     }
     this.TreeVm.Selected.push(name);

     this.TreeVMS.push(this.TreeVm);
   })
 }

  // ngAfterViewChecked(): void {

  //   this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  //   }
}
