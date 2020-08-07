import React from 'react';

class Addtodo extends React.Component {
    state = {
        content: ''
    }
    
    handleChange=(e) =>{
        this.setState({
            content : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Add new task to the list</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default Addtodo;