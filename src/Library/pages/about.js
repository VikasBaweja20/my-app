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
            course: state.course,
            authors: state.authors
        }

    }
    // formatAuthors=()=>{
    //   const {authors}=this.state;
    //   const authorsList=authors.map(item=>({
    //     value: item.id,
    //     text: `${item.firstName} ${item.lastName}`
    //   }));
    //   this.setState({authors: authorsList});
    // };

    // componentDidMount(){
    //   this.formatAuthors();
    // }

    submit = async (values) => {
      console.log(values);
      // actions.setErrors({ title: "Title is already exist" });
      try {
        let res = null;
        if (values.id) {
          res = await fetch(`http://localhost:3004/courses/${values.id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
        } else {
          res = await fetch('http://localhost:3004/courses', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
        }
        const course = await res.json();
        const { history } = this.props;
        history.push('/', { course });
      } catch (error) {
        
      }
    };

    changeValue=e=>{
      const { course} = this.state
      this.setState({ course: { ...course, [e.target.name]:e.target.value }})  ;
      console.log(course);
    }

  render() {
      const {course,authors}= this.state;
      const authorsList=authors.map(item=>({
        value: item.id,
        text: `${item.firstName} ${item.lastName}`
      }));
      console.log(authors);
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
        <select value={course.authorId} name='authorId' onChange={this.changeValue} >
        {authorsList && authorsList.map(item=> <option key={item.value} value={item.value}>{item.text}</option>)}
        </select>
        </div>
        <div>
        <label>Length</label>
        <input type="text"  name='length'  value={course.length} onChange={this.changeValue}/>
        </div>
        <div>
        <label>Category</label>
        <input type="text"  name='category' value={course.category} onChange={this.changeValue}/>
        </div>
        <button type="submit" onClick={()=>this.submit(course)}>{course.id?'Update':'Add'}</button>
      </div>
    )
  }
}
