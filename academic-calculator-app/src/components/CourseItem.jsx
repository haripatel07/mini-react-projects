import "../styles/CourseItem.css";

export default function CourseItem({ course, index, deleteCourse }) {
  return (
    <div className="course-item">
      <span>{course.name} | {course.credits} Credits | Grade: {course.grade} | Sem {course.semester}</span>
      <button onClick={() => deleteCourse(index)}>Delete</button>
    </div>
  );
}
