import * as React from "react";
//import * as style from "../css/style.scss";

interface TaskState {isDone ?: boolean}
interface TaskProps {id ?: number; name ?: string;  }

//class créant une tache 
export class Task extends React.Component<TaskProps, TaskState> {
    //constructeur
    constructor(taskname : string, idTask:number) {
        super();
        this.state = {isDone : false};
        this.props = {id : idTask, name: taskname}
    }
    //classe permettant de lui attribuer une représentation graphique
    render(): JSX.Element {
        return (<div>
            <input type="radio"/>
            <p>{this.props.name}</p>
        </div>)
    }
}