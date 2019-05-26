import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class taskFilter extends Component {
    static propTypes = {
        prop: PropTypes
       
      }

      constructor(props){
        super(props);
        console.log(props);

      }

  render() {
    return (
        <div>
        <button type="button" onClick={this.props.showall} >All</button>
        <button type="button" onClick={this.props.completed} >Completed</button>
        <button type="button" onClick={this.props.pending} >Pending</button>
        </div> 
    )
  }
}
taskFilter.propTypes={
    showall: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    pending:PropTypes.func.isRequired
}