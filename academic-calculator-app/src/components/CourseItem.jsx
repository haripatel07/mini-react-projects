import '../styles/CourseItem.css';

function CourseItem({ course, onDelete }) {
  return (
    <li className="course-item">
      <span>
        <strong>{course.name}</strong> (Sem: {course.semester}) - {course.credits} Credits, Grade: {course.grade}
      </span>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default CourseItem;