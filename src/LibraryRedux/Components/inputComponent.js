import React, { Component } from 'react'
import PropTypes from 'prop-types'

class inputComponent extends Component {
    constructor(props){
        super(props);
        console.log(props);
      }
    render() {
        return (
            <div>
            <label>{this.props.labelName}</label>
            <input type="text" name={this.props.textName} value={this.props.value} onChange={this.onChange} />
            </div>           
        )
    }
}

inputComponent.propTypes={
labelName: PropTypes.string.isRequired,
textName: PropTypes.string.isRequired,
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired
};

inputComponent.defaultProps={
    labelName: 'Label',
    textName: 'Text'
}

export default inputComponent;