import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as CourseAction from '../../redux/actions/CourseAction';
import PropTypes from 'prop-types';

export class CoursesPage extends Component {

    state = {
        course: {
            title: ''
        }
    }

    changeHandle = (event) => {
        const course = {...this.state.course, title: event.target.value}
        console.log(course)
        this.setState({course})
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(CourseAction.CreateCourse(this.state.course))
        // alert(this.state.course.title)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.changeHandle} placeholder="Add Course"/>
                <input type="submit" value="Save"/>
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        )
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps (state) {
    return {
        courses: state.courses
    }
}
export default connect(mapStateToProps)(CoursesPage)
