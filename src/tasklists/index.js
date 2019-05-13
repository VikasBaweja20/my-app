import React, { Component } from 'react'


export default class index extends Component {

  state={
      taskName:"",
      taskLists:[]
  }

  onChange= e =>{
      this.setState({taskName: e.target.value})
  }

  submit = e => {
    e.preventDefault();
      const{ taskName, taskLists }=this.state;
      this.setState({ 
        taskLists:[...taskLists, taskName],
        taskName:"" 
        });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}></input>
        <button type="submit" submit={this.submit}>Add Task</button>
      </div>
    )
  }
}
