import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/CourseAction";
import { loadAuthors } from "../../redux/actions/AuthorAction";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import newCourse from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Load courses failed", +error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Load Authors failed", +error);
      });
    }
  }, []);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  function handleSave(event) {
    event.preventDefault();
    debugger;
    saveCourse(course);
  }
  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={changeHandler}
      onSave={handleSave}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
