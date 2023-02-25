import React,{ useState } from 'react'

export default function Task() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Mary', age: 30 },
        { id: 3, name: 'Bob', age: 25 },
      ]);
    
      const filteredUsers = users.filter((user) => user.age > 20);
    
      return (
        <div>
          <h1>Filtered Users:</h1>
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }
 