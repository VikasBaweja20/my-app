import React, { Component } from 'react'
import TaskForm from './taskForm';
import TaskList from './taskList';
import TaskFilter from './taskFilter';
class index extends Component {
  state={
      taskName:"",
      taskLists:[]
  }

  constructor(props) {
    super(props);
    this.getTasksData();
  }

  onChange= e =>{
      console.log(e.target.value);
      this.setState({taskName: e.target.value})
  }

  getTasksData = async () => {
    const res = await fetch('http://localhost:3004/tasks');
    const taskLists = await res.json();
    this.setState({ taskLists });
  };

  addListitem = e => {
      e.preventDefault();
      const{ taskName, taskLists }=this.state;
      const maxTaskId=taskLists.length>0?taskLists[taskLists.length-1].id:0;
      console.log(taskName, taskLists);
      this.setState({ 
        taskLists:[...taskLists, {id: maxTaskId+1, name: taskName, isDone:false}],
        taskName:"" 
        });
  }

  deleteTask=(id)=>{
    const{  taskLists }=this.state;
    this.setState({ 
        taskLists: taskLists.filter(x => x.id !==id)
        });
  }

  taskDone=(id)=>{
    const{  taskLists }=this.state;
    const index=taskLists.findIndex(x => x.id ===id);
    this.setState({ 
        taskLists: [...taskLists.slice(0,index),
          {...taskLists[index],isDone:!taskLists[index].isDone},
           ...taskLists.slice(index+1)]
        });
  }

  render() {
      const{ taskName, taskLists }=this.state;
    return (
      <div>
      <h3>To Do</h3>
      <TaskForm onChange={this.onChange} value={taskName} addListitem={this.addListitem}></TaskForm>
      <TaskList taskLists={taskLists} taskDone={this.taskDone} deleteTask={this.deleteTask} ></TaskList>
      <TaskFilter showall={this.showall} completed={this.completed} pending={this.pending}></TaskFilter>

      </div>
    )
  }
}

export default index; 