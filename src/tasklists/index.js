import React, { Component } from 'react'
import TaskForm from './taskForm';
import TaskList from './taskList';
import TaskFilter from './taskFilter';
class index extends Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');
    this.getTasksData();
    console.log(this.props.history);
  }

  state={
    taskName:"",
    taskLists:[],
    status:''
}

componentDidMount()
{
  console.log('Mount');
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

 /* addListitem = e => {
      e.preventDefault();
      const{ taskName, taskLists }=this.state;
      const maxTaskId=taskLists.length>0?taskLists[taskLists.length-1].id:0;
      console.log(taskName, taskLists);
      this.setState({ 
        taskLists:[...taskLists, {id: maxTaskId+1, name: taskName, isDone:false}],
        taskName:"" 
        });
  }*/

  addListitem = async e => {
    console.log('add');
    e.preventDefault();
    const{ taskName, taskLists }=this.state;
    //const maxTaskId=taskLists.length>0?taskLists[taskLists.length-1].id:0;
    const newTask={name: taskName, isDone:false};
    console.log(taskName, taskLists);
    const res = await fetch('http://localhost:3004/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  console.log(await res.json()); 
    this.setState({ 
      taskName:'',
      taskLists:[...taskLists, newTask]
      });
      this.getTasksData();
}

  deleteTask=async(id)=>{
    console.log('delete');
    const{  taskLists }=this.state;
     await fetch('http://localhost:3004/tasks/' +id, {
      method: 'DELETE',
    });
    this.setState({ 
        taskLists: taskLists.filter(x => x.id !==id)
        });
  }

  taskDone=(id)=>{
    console.log('done');
    const{  taskLists }=this.state;
    const index=taskLists.findIndex(x => x.id ===id);
    this.setState({ 
        taskLists: [...taskLists.slice(0,index),
          {...taskLists[index],isDone:!taskLists[index].isDone},
           ...taskLists.slice(index+1)]
        });
  }

  changeStatus = status => {
    console.log(status);
    this.setState({ status: status });
  };

  render() {
      const{ taskName, taskLists, status }=this.state;
      let data = taskLists;
      if (status === 'pending') {
        data = taskLists.filter(x => !x.isDone);
      }
      if (status === 'completed') {
        data = taskLists.filter(x => x.isDone);
      }
    return (
      <div>
      <h3>To Do</h3>
      <TaskForm onChange={this.onChange} value={taskName} addListitem={this.addListitem}></TaskForm>
      <TaskList taskLists={data} taskDone={this.taskDone} deleteTask={this.deleteTask} ></TaskList>
      <TaskFilter showall={()=>this.changeStatus('all')} completed={()=>this.changeStatus('completed')} pending={()=>this.changeStatus('pending')}></TaskFilter>
      </div>
    )
  }
}

export default index; 