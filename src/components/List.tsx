import * as React from "react";
import { Task } from "./Task"
interface ListState { text?: string; list?: Array<Task> }

let id: number;
id = 0;


export class Liste extends React.Component<undefined,ListState> {
    //constructeur
    constructor() {
        super();
        this.state = { text: "",list:[] };
    }
    //méthode permettant d'ajouter un item
    add(item: Task) : void {
        this.setState({
            list: [...this.state.list, item],
            text:""
        })
    }
    //méthode appelée au clic sur le
    handleClick(event: any) : void {
        id++;
        let tmp = new Task(this.state.text, id); // JON : Non. parce que Task est un composant. Tu dois cibler des data ici.
        // JON : ton composant manipule des data et il utilise d'autre composant pour mettre en forme ces data
        // JON : je conseille de déclarer une class Task
        // JOn : class Task { id:string, name:string, isDone: boolean } puis ici tu fais ton new Task
        this.add(tmp);
    }
    //méthode appelée a chaque changement de texte dans la barre d'ajout de tache
    handleChange(event: any) : void{
        this.setState({ text: event.target.value}) ;
    }
    //render de la liste
    render(): JSX.Element {
        return (<div>

            <input type="text" id="tacheAjout" value={this.state.text} onChange={this.handleChange.bind(this)} />
            <button id="boutonAjout" onClick={this.handleClick.bind(this)}>Ajouter</button><br />

            <ul>
                {
                    this.state.list.map((t: Task) => {
                        return <li key={t.props.id}>{t.render /* JON :  ici tu peux directment appeler ton composant <Task name={} id={} /> */ }</li> 
                    })
                }
            </ul>
        </div>); 
    }
}