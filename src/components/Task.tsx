import * as React from "react";
import {TaskData} from "./TaskData";
import "../css/style.scss";

//interface TaskState { isDone:boolean } --> Ne sert à rien
interface TaskProps {properties: TaskData }

//class créant une tache -> JON : ça c'est un composant Taches = représentation visuelle d'une tache 
export class Task extends React.Component<TaskProps, undefined> {
    //constructeur
    constructor(taskname : string, idTask:number) {
        super();
        //this.state = {isDone : false}; // JON : ici tu gère le fait que la taches soit terminée par le composant lui même 
        this.props = {properties : new TaskData(idTask,taskname)}
    }

    
    // classe permettant de lui attribuer une représentation graphique -> JON :  c'est toute la classe qui gère la représentation graphique
    // JON : cette classe gère uniquement le rendu
    render(): JSX.Element {
        return (<div className="inline">
            <span><input type="radio" onClick={this.handleClick.bind(this)}/></span> 
            <span><p>{this.props.properties.name}</p></span>
        </div>)
    }
}