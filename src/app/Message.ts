export class Message {
  constructor(public author: string, public content: string,public Id:number,
    public HasParent:boolean,public HasChildren:boolean,

    public ParentId:number,public ParentName:string,public ChildName:string[]

    ) {}
}
