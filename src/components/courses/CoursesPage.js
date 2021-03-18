import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as CourseAction from '../../redux/actions/CourseAction';
import * as AuthorAction from '../../redux/actions/AuthorAction';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';     
import CourseList from './CourseList';
export class CoursesPage extends Component {
componentDidMount() {
    const {courses, authors, actions} = this.props;
if(courses.length === 0 ) {
    actions.loadCourses().catch(error => {
        alert('Load courses failed', +error)
    })
}
    
if(authors.length === 0) {
    actions.loadAuthors().catch(error => {
        alert('Load Authors failed', +error)
    })
}
    
}
    // state = {
    //     course: {
    //         title: ''
    //     }
    // }

    changeHandle = (event) => {
        const course = {...this.state.course, title: event.target.value}
        console.log(course)
        this.setState({course})
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.CreateCourse(this.state.course);
        // this.props.dispatch(CourseAction.CreateCourse(this.state.course))
        // alert(this.state.course.title)
    }
    render() {
        return (
            <>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </>
        )
    }
}


CoursesPage.propTypes = {
    actions : PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
}
function mapStateToProps (state) {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorsName: state.authors.find(author => author.id === course.authorId).name
            }
        }),
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(CourseAction.loadCourses, dispatch),
            loadAuthors: bindActionCreators(AuthorAction.loadAuthors, dispatch)
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
