import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class about extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
      };

      constructor(props){
        super(props);
        console.log('constructor');
        console.log(this.props.history);
        console.log(this.props);

        const {location : {state}}= props;

        this.state = {
            course: state.course
        }

    }
    componentDidMount(){
    }

    changeValue=e=>{
        const { course} = this.state
      this.setState({ course: { ...course, [e.target.name]:e.target.value }})  ;
      console.log(course);
    }

  render() {
      const {course}= this.state;
    return (
      <div>
      <h1>About</h1>
      <button type="button" onClick={()=>this.props.history.goBack()} >Back</button>
        <div>
        <label>Title</label>
        <input type="text" name='title' value={course.title} onChange={this.changeValue} />
        </div>
        <div>
        <label>Course Url</label>
        <input type="text" name='watchHref' value={course.watchHref} onChange={this.changeValue}/>
        </div>
        <div>
        <label>Author</label>
        <input type="text"  name='authorId' value={course.authorId} onChange={this.changeValue}/>
        </div>
        <div>
        <label>Length</label>
        <input type="text"  name='length'  value={course.length} onChange={this.changeValue}/>
        </div>
        <div>
        <label>Category</label>
        <input type="text"  name='category' value={course.category} onChange={this.changeValue}/>
        </div>
        <button type="button">Update</button>
      </div>
    )
  }
}
