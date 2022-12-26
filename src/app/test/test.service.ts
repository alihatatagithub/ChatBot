import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tree } from './Tree';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  baseUrl = 'https://localhost:7168/api/';

  constructor(private http:HttpClient) { }

  GetAllParents() {
    return this.http.get(this.baseUrl+'Tree/GetParents');
  }

  GetAll(){
    return this.http.get(this.baseUrl+'Tree');
  }

  GetChildrenByParentId(ParentId:number){
    return this.http.get(this.baseUrl+'Tree/GetChildrenByParentId?id='+ParentId);
  }

  HaveChildrenByParentId(ParentId:number){
    return this.http.get(this.baseUrl+'Tree/HaveChildren?id='+ParentId);
  }
}
