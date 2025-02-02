import { User } from './types';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      {user.isStudent !== undefined && (
        <p>Student: {user.isStudent ? 'Yes' : 'No'}</p>
      )}
      {user.address && <p>Address: {user.address}</p>}
      {user.hobbies && (
        <div>
          <h4>Hobbies:</h4>
          <ul>
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
