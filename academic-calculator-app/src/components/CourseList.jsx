import React from 'react';
import CourseItem from './CourseItem.jsx';
import '../styles/CourseList.css';

function CourseList({ courses, onDeleteCourse }) {
  if (courses.length === 0) {
    return <p className="no-courses-message">No courses added yet. Start by adding one!</p>;
  }

  return (
    <div className="course-list-container">
      <h2>Your Courses</h2>
      <ul className="course-list">
        {courses.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            onDelete={() => onDeleteCourse(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;