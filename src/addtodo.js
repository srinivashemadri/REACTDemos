import React, { Component } from 'react';

class Addtodo extends Component{
    
    state = {
        content : ''
    }
    handleonchange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handlesubmit =(e) =>{
        e.preventDefault();

        this.state.content === '' ? alert("Can't add an empty TODO") : this.props.addtodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input id="content" type="text" placeholder="Todo.." value={this.state.content} onChange={this.handleonchange}></input>
                </form>
            </div>
        )
    }
}
export default Addtodo