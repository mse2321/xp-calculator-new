import React from 'react';

interface ResultsProps {
  characterName: string;
  characterLevel: number;
  results: string;
  onClose: () => void;
}

const Results: React.FC<ResultsProps> = ({
  characterName,
  characterLevel,
  results,
  onClose,
}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400 }}>
      <h2>Results</h2>
      <p>
        <strong>Name:</strong> {characterName}
      </p>
      <p>
        <strong>Level:</strong> {characterLevel}
      </p>
      <div style={{ margin: '12px 0' }}>
        <strong>Details:</strong>
        <div>{results}</div>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Results;