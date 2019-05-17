import React, { Component } from 'react'
import PropTypes from 'prop-types'

class taskList extends Component {


  render() {
    return (
     
      <ul>
      {
          this.props.taskLists.map((item) =>
              <li key={item.id}>
              <input type="checkbox" value={item.isDone} onClick={()=>this.props.taskDone(item.id)} ></input>
              <p>{item.id}</p>
              <p style={{
                flex: 1,
                textDecoration: item.isDone ? "line-through" : "none"
              }}>{item.name}</p><p>
              {item.isDone}</p> 
              <button onClick={()=>this.props.deleteTask(item.id)}>Delete</button> 
              </li>
          )
      }
      </ul>
      
    )
  }
}

taskList.propTypes={
    taskLists: PropTypes.array,
     taskDone: PropTypes.func.isRequired,
     deleteTask: PropTypes.func.isRequired
}

export default taskList;