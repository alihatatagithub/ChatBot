import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeService } from './test.service';
import { Tree } from './Tree';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   AllParent:Tree[]=[] ;
   AllDisplayedParent:Tree[] = [];
  constructor(private service:TreeService) {


  }


  ngOnInit(): void {
    this.service.GetAllParents().subscribe((a :any )=> {
      this.AllParent = a;
     })

  }





}
