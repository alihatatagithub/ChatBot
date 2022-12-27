import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeService } from './test.service';
import { Tree } from './Tree';
import { TreeDto } from './TreeDto';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   AllParent:Tree[]=[] ;
   AllChildren:TreeDto[]=[];
   AllChildren2:TreeDto[]=[];
  constructor(private service:TreeService) {


  }


  ngOnInit(): void {
    this.service.GetAllParents().subscribe((a :any )=> {
      this.AllParent = a;
     })

  }

  GetChildrenByParentId(id:number){
    this.service.GetChildrenByParentId(id).subscribe((a:any) =>{
      this.AllChildren = a;
    },error => {
      console.log(error);
    }, () => {
      for (let index = 0; index < this.AllChildren.length; index++) {
        this.AllChildren2.push(this.AllChildren[index]);

      }
    })
  }


}
