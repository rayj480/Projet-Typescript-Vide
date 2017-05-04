import * as React from "react";

export interface AppProps { qui: string; quoi: string; }

// 'AppProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {

    render() {
        return (<div>
            <h1>Salut {this.props.qui}, on va faire du {this.props.quoi}!</h1>
        </div>);
    }
}
