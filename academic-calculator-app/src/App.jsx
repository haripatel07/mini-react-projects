import React, { useState, useEffect } from 'react';
import CourseForm from './components/CourseForm.jsx';
import CourseList from './components/CourseList.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';
import './App.css'; 

function App() {
  // State to store all courses
  const [courses, setCourses] = useState(() => {
    // Initialize state from local storage or an empty array
    const savedCourses = localStorage.getItem('academicCourses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  // Save courses to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('academicCourses', JSON.stringify(courses));
  }, [courses]);

  // Grade point mapping (customize as per your university's system)
  const gradePointsMap = {
    'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'P': 4, 'F': 0, 'AB': 0
  };

  // Function to add a new course
  const addCourse = (newCourse) => {
    if (newCourse.name && newCourse.credits > 0 && newCourse.semester > 0 && gradePointsMap.hasOwnProperty(newCourse.grade.toUpperCase())) {
      setCourses([...courses, newCourse]);
    } else {
      alert('Please enter valid course details (name, positive credits, positive semester, and a valid grade).');
    }
  };

  // Function to delete a course
  const deleteCourse = (indexToDelete) => {
    setCourses(courses.filter((_, index) => index !== indexToDelete));
  };

  // Generic function to calculate GPA (used for both SGPA and CGPA)
  const calculateGPA = (courseArray) => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courseArray.forEach(course => {
      const points = gradePointsMap[course.grade.toUpperCase()];
      if (points !== undefined) {
        totalGradePoints += points * parseFloat(course.credits);
        totalCredits += parseFloat(course.credits);
      }
    });

    return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
  };

  // Calculate SGPA for a given semester
  const calculateSGPA = (semester) => {
    const semesterCourses = courses.filter(course => course.semester === semester);
    return calculateGPA(semesterCourses);
  };

  // Calculate overall CGPA
  const calculateCGPA = () => {
    return calculateGPA(courses);
  };

  // Calculate equivalent percentage (common formula: CGPA * 9.5)
  const calculatePercentage = (gpa) => {
    const parsedGpa = parseFloat(gpa);
    if (!isNaN(parsedGpa) && parsedGpa >= 0) {
      return (parsedGpa * 9.5).toFixed(2);
    }
    return '0.00';
  };

  // Get unique semesters for SGPA calculation display
  const uniqueSemesters = [...new Set(courses.map(course => course.semester))].sort((a, b) => a - b);

  return (
    <div className="app-container">
      <h1>Academic Performance Calculator</h1>

      <CourseForm onAddCourse={addCourse} gradePointsMap={gradePointsMap} />

      <CourseList courses={courses} onDeleteCourse={deleteCourse} />

      <ResultsDisplay
        cgpa={calculateCGPA()}
        percentage={calculatePercentage(calculateCGPA())}
        uniqueSemesters={uniqueSemesters}
        calculateSGPA={calculateSGPA}
      />
    </div>
  );
}

export default App;