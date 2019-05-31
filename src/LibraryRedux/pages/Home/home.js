import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CourseList from './courseList';
export default class home extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
      };
    state={
        courses:[],
        authors:[],
        loading:true
    }

    
constructor(props){
    super(props);
    console.log('constructor');
    console.log(this.props.history);
    //this.getAuthorsList();
    //this.getCourseList();
    //this.fetchData();//Cant set state here
}
componentDidMount(){
    
    this.fetchData();
}

fetchData = async () => {
    console.log('fetch call');
    this.setState({ loading: true });
    try {
      setTimeout(async () => {
        const resCourses = fetch('http://localhost:3004/courses');
        const resAuthors = fetch('http://localhost:3004/authors');
        const data = await Promise.all([resCourses, resAuthors]);
        const json = await Promise.all([data[0].json(), data[1].json()]);
        this.setState({ courses: json[0], authors: json[1], loading: false });
      }, 1000);
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  /*
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
*/

editCourse = course => {
    const { history } = this.props;
    const { authors } = this.state;
    history.push('/about', {
      course,
      authors,
    });
  };

deleteCourse=async course=>{
    console.log('delete course');
    const {courses}= this.state;
    await fetch (`http://localhost:3004/courses/${course.id}`,{
    "method":"DELETE"
    });
 this.setState({ courses: courses.filter(c => c.id !== course.id)});
}

addCourse=async course=>{
    console.log(this.props);
    const { history } = this.props;
    const { authors } = this.state;
    history.push('/about', {
      course: {
        title: '',
        authorId:'',
        length: '',
        category: '',
        watchHref:''
      },
      authors,
    });
}

renderAuthorName = id => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  render() {
      const {courses,loading}=this.state;
      if (loading){
          return (<div><h1>Loading...</h1></div>);
      }
 /*why not arrow operator for getting author name*/
    return (
      <div>
        <h1>Home</h1>
        <button type="button" onClick={this.addCourse}>Add New Course</button>
       <CourseList courses={courses} editCourse ={this.editCourse} deleteCourse = {this.deleteCourse} renderAuthorName={this.renderAuthorName} />
      </div>
    )
  }
}
