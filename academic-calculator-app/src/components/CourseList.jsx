import CourseItem from "./CourseItem";
import "../styles/CourseList.css";

export default function CourseList({ courses, deleteCourse }) {
  return (
    <div className="course-list">
      {courses.map((c, index) => (
        <CourseItem key={index} course={c} index={index} deleteCourse={deleteCourse} />
      ))}
    </div>
  );
}
