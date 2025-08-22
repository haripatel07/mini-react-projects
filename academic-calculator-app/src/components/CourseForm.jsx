import { useState } from "react";
import "../styles/CourseForm.css";

export default function CourseForm({ addCourse }) {
  const [course, setCourse] = useState({
    name: "",
    credits: "",
    grade: "",
    semester: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course.name || !course.credits || !course.grade || !course.semester) return;
    addCourse({ ...course, credits: Number(course.credits) });
    setCourse({ name: "", credits: "", grade: "", semester: "" });
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Course Name" value={course.name} onChange={handleChange} />
      <input type="number" name="credits" placeholder="Credits" value={course.credits} onChange={handleChange} />
      <select name="grade" value={course.grade} onChange={handleChange}>
        <option value="">Grade</option>
        <option value="A">A (10)</option>
        <option value="B">B (8)</option>
        <option value="C">C (6)</option>
        <option value="D">D (4)</option>
        <option value="F">F (0)</option>
      </select>
      <input type="number" name="semester" placeholder="Semester" value={course.semester} onChange={handleChange} />
      <button type="submit">Add Course</button>
    </form>
  );
}
