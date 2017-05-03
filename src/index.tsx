import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import "./css/style.scss";

// ajout de l'index à la variable window
declare var window: {
    [key:string]: any; // missing index defintion
    prototype: Window;
    new(): Window;
}



ReactDOM.render(
    <App qui="Matthieu" quoi="REACT" />,
    document.getElementById("example")
);