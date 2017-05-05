export class TaskData {
    
    public name : string;
    public id : number;
    public isDone : boolean;

    constructor(id : number, name : string){
        this.id = id;
        this.name = name;
        this.isDone = false;
    }
}