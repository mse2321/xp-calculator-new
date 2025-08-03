import React from 'react';

type Character = {
  id: number;
  name: string;
  level: number;
};

type ProfileProps = {
  username: string;
  email: string;
  characters: Character[];
  onAddCharacter: () => void;
};

const Profile: React.FC<ProfileProps> = ({ username, email, characters, onAddCharacter }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <h3>Characters</h3>
      <ul>
        {characters.map(char => (
          <li key={char.id}>
            {char.name} (Level {char.level})
          </li>
        ))}
      </ul>
      <button onClick={onAddCharacter}>Add New Character</button>
    </div>
  );