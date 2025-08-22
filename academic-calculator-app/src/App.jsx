import { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import ResultsDisplay from "./components/ResultsDisplay";
import "./App.css";

export default function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateResults = () => {
    if (courses.length === 0) return { cgpa: 0, percentage: 0, sgpa: {} };

    let totalCredits = 0;
    let totalPoints = 0;
    let semesterData = {};

    courses.forEach((c) => {
      const gradePoint =
        c.grade === "A" ? 10 :
        c.grade === "B" ? 8 :
        c.grade === "C" ? 6 :
        c.grade === "D" ? 4 : 0;

      totalCredits += c.credits;
      totalPoints += c.credits * gradePoint;

      if (!semesterData[c.semester]) {
        semesterData[c.semester] = { credits: 0, points: 0 };
      }
      semesterData[c.semester].credits += c.credits;
      semesterData[c.semester].points += c.credits * gradePoint;
    });

    const cgpa = (totalPoints / totalCredits).toFixed(2);
    const percentage = (cgpa * 9.5).toFixed(2);

    let sgpa = {};
    Object.keys(semesterData).forEach((sem) => {
      sgpa[sem] = (
        semesterData[sem].points / semesterData[sem].credits
      ).toFixed(2);
    });

    return { cgpa, percentage, sgpa };
  };

  const results = calculateResults();

  return (
    <div className="app-container">
      <h1>Academic Calculator</h1>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} deleteCourse={deleteCourse} />
      <ResultsDisplay results={results} />
    </div>
  );
}
