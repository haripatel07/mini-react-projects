import React from 'react';
import '../styles/ResultsDisplay.css';

function ResultsDisplay({ cgpa, percentage, uniqueSemesters, calculateSGPA }) {
  return (
    <div className="results-display">
      <h2>Calculated Results</h2>
      <div className="result-section">
        <h3>Overall Performance</h3>
        <p>Your CGPA: <strong>{cgpa}</strong></p>
        <p>Equivalent Percentage: <strong>{percentage}%</strong></p>
      </div>

      {uniqueSemesters.length > 0 && (
        <div className="result-section">
          <h3>Semester-wise SGPA</h3>
          {uniqueSemesters.map(semester => (
            <p key={semester}>Semester {semester} SGPA: <strong>{calculateSGPA(semester)}</strong></p>
          ))}
        </div>
      )}
      {uniqueSemesters.length === 0 && <p>Add courses to see semester-wise SGPA.</p>}
    </div>
  );
}

export default ResultsDisplay;