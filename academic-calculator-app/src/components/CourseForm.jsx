import React, { useState } from 'react';
import '../styles/CourseForm.css';

function CourseForm({ onAddCourse, gradePointsMap }) {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState('');
  const [grade, setGrade] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || credits === '' || grade.trim() === '' || semester === '') {
      alert('All fields are required.');
      return;
    }
    if (isNaN(parseFloat(credits)) || parseFloat(credits) <= 0) {
      alert('Credits must be a positive number.');
      return;
    }
    if (isNaN(parseInt(semester)) || parseInt(semester) <= 0) {
      alert('Semester must be a positive integer.');
      return;
    }
    if (!gradePointsMap.hasOwnProperty(grade.toUpperCase())) {
      alert(`Invalid grade. Please use one of: ${Object.keys(gradePointsMap).join(', ')}`);
      return;
    }

    onAddCourse({
      name: name.trim(),
      credits: parseFloat(credits),
      grade: grade.trim().toUpperCase(),
      semester: parseInt(semester)
    });

    // Clear form fields after submission
    setName('');
    setCredits('');
    setGrade('');
    setSemester('');
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <h2>Add New Course</h2>
      <div className="form-group">
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Data Structures"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="credits">Credits:</label>
        <input
          type="number"
          id="credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          placeholder="e.g., 4"
          step="0.5"
          min="0.5"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="e.g., A+, B"
          maxLength="2"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <input
          type="number"
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          placeholder="e.g., 1"
          min="1"
          required
        />
      </div>
      <button type="submit" className="add-button">Add Course</button>
    </form>
  );
}

export default CourseForm;