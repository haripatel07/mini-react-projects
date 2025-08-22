import "../styles/ResultsDisplay.css";

export default function ResultsDisplay({ results }) {
  return (
    <div className="results-display">
      <h2>Results</h2>
      <div className="result-card"><strong>CGPA:</strong> {results.cgpa}</div>
      <div className="result-card"><strong>Percentage:</strong> {results.percentage}%</div>
      {Object.keys(results.sgpa).map((sem) => (
        <div key={sem} className="result-card">
          <strong>Semester {sem} SGPA:</strong> {results.sgpa[sem]}
        </div>
      ))}
    </div>
  );
}
