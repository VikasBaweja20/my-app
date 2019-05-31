/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const courseList = ({courses,editCourse,deleteCourse,renderAuthorName}) => 
     (
       
        <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Url</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course=>(
                <tr key={course.id}>
                 <td>{course.title}</td>
                 <td><a href={course.watchHref}>Click here</a></td>
                 <td>{renderAuthorName(course.authorId)}</td>
                    <td>{course.length}</td>
                    <td>{course.category}</td>
                 <td><button type='button' id="edit" onClick={()=>editCourse(course)}>Edit</button></td>
                 <td><button type='button' id="delete" onClick={()=>deleteCourse(course)}>Delete</button></td>
                </tr>
            ))
        }
        </tbody>
        </table>
    )

courseList.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    editCourse: PropTypes.func.isRequired,
    renderAuthorName: PropTypes.func.isRequired,
  };
  

export default courseList
