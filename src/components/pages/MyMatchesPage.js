import React from 'react';

const MyMatchesPage = () => {
  const matches = [
    { id: 1, name: 'Alice', age: 25, description: 'Loves hiking and reading.' },
  ];

  return (
    <div>
      <h2>My Matches</h2>
      {matches.map((match) => (
        <div key={match.id}>
          <img src="path/to/default-pic.jpg" alt={match.name} />
          <h3>{match.name}, {match.age}</h3>
          <p>{match.description}</p>
          <button>View More</button>
        </div>
      ))}
    </div>
  );
};

export default MyMatchesPage;
