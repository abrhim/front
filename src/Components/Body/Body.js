import React, { Component } from "react";
import {Typography,Paper} from "@material-ui/core"

class Body extends Component {
    render(){
        const {href,name,image,color} = this.props.school
    console.log(this.props)
    return (
        <>
        <Paper>
        <header className="App-header">
            <Typography variant="display1">{name}</Typography>
            <br/>
            <a href={href} ><img src={image} className="App-logo" alt={name}/> </a>
        </header>
        hello
        </Paper>
        </>
        )
    }
}

export default Body