import React, { useEffect, useState } from "react";

const UsersFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    const fetchUsers = async () => {
      try {
        /* const response = await fetch('https://jsonplaceholder.typicode.com/users');*/
        const response = await fetch("/myusers.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2 className="myclass">{user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>
              Address: {user.address.street}, {user.address.city}
            </h2>
            <h2>Phone: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersFetch;
