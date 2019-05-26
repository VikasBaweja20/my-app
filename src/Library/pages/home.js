import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class home extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
      };
    state={
        courses:[],
        authors:[]
    }

    
constructor(props){
    super(props);
    console.log('constructor');
    this.getAuthorsList();
    this.getCourseList();
}

getCourseList=async ()=>{
    console.log('course call');
    const res =await fetch('http://localhost:3004/courses');
    const coursesList=await res.json();
    this.setState({courses: coursesList});
}

getAuthorsList=async()=>{
    console.log('authors call');
    const res =await fetch('http://localhost:3004/authors');
    const authorsList=await res.json();
    this.setState({authors: authorsList});
}

deleteCourse=async course=>{
    console.log('delete course');
    const {courses}= this.state;
    await fetch (`http://localhost:3004/courses/${course.id}`,{
    "method":"DELETE"
    });
 this.setState({ courses: courses.filter(c => c.id !== course.id)});
 
}

  render() {
      const {courses}=this.state;
    return (
      <div>
        <h1>Home</h1>
        <table>
        <thead>
        <tr>
        <th>Title</th>
        <th>Url</th>
        <th>Length</th>
        <th>Category</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            courses.map(course=>(
                <tr key={course.id}>
                <td>{course.title}</td>
                <td><a href={course.watchHrefl}>Click here</a></td>
                <td>{course.length}</td>
                <td>{course.category}</td>
                <td><button type='button'>Edit</button></td>
                <td><button type='button' onClick={()=>this.deleteCourse(course)}>Delete</button></td>
                </tr>
            ))
        }
        </tbody>
        </table>
      </div>
    )
  }
}
