import { Component } from "react";
import React from "react";

export const MContext=React.createContext ();
class contextObject extends Component{
    state = {value: 0}
    render() {
        return(
            <MContext.Provider value={{state: this.state, setValue: (value) => this.setState({value: value})}}>{this.props.children}</MContext.Provider>
        )
    }
}