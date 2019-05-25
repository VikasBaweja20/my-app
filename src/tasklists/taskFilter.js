import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class taskFilter extends Component {
 

  render() {
    return (
        <div>
        <button onClick={this.props.showall} >All</button>
        <button onClick={this.props.completed} >Completed</button>
        <button onClick={this.props.pending} >Pending</button>
        </div> 
    )
  }
}
taskFilter.propTypes={
    showall: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    pending:PropTypes.func.isRequired
}