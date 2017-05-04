import * as React from "react";
//import * as style from "../css/style.scss";

interface TaskState {isDone ?: boolean} {/* JON : jamais utilisé */}
interface TaskProps {id ?: number; name ?: string;  }

//class créant une tache -> JON : ça c'est un composant Taches = représentation visuelle d'une tache 
export class Task extends React.Component<TaskProps, TaskState> {
    //constructeur
    constructor(taskname : string, idTask:number) {
        super();
        this.state = {isDone : false}; // JON : ici tu gère le fait que la taches soit terminée par le composant lui même 
        this.props = {id : idTask, name: taskname}
    }
    // classe permettant de lui attribuer une représentation graphique -> JON :  c'est toute la classe qui gère la représentation graphique
    // JON : cette classe gère uniquement le rendu
    render(): JSX.Element {
        return (<div>
            <input type="radio"/> 
            <p>{this.props.name}</p>
        </div>)
    }
}