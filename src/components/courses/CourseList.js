import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const CourseList = ({courses}) => {
    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr style={tableRowStyle}>
                    <th style={padding}></th>
                    <th style={padding}>Title</th>
                    <th style={padding}>Author</th>
                    <th style={padding}>Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => {
                    return (
                        <tr style={tableRowStyle} key={course.id}>
                            <td style={padding}>
                                <a className="btn btn-light" href={"http://pluralsight.com/courses/" + course.slug}>Watch</a>
                            </td>
                            <td style={padding}>
                                <Link to={"/course" + course.slug}>{course.title}</Link>
                            </td>
                            <td style={padding}>{course.authorsName}</td>
                            <td style={padding}>{course.category}</td>
                        </tr>
                        
                    )
                    })
                }
                
            </tbody>
        </table>
    )
}
const tableRowStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px 0'
}
const padding = {
    padding: '10px'
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
}

export default CourseList
