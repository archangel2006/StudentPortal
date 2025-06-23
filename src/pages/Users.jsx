import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        // Simulate data loading delay
        await new Promise((res) => setTimeout(res, 1000));

        // Hardcoded student data
        const data = [
          { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', branch: 'CSE', semester: 5 },
          { id: 2, name: 'Meera Iyer', email: 'meera@example.com', branch: 'ECE', semester: 6 },
          { id: 3, name: 'Rohan Patel', email: 'rohan@example.com', branch: 'ME', semester: 4 },
          { id: 4, name: 'Anjali Verma', email: 'anjali@example.com', branch: 'CE', semester: 3 },
          { id: 5, name: 'Yash Singh', email: 'yash@example.com', branch: 'CSE', semester: 7 },
          { id: 6, name: 'Sneha Das', email: 'sneha@example.com', branch: 'IT', semester: 2 },
          { id: 7, name: 'Aditya Roy', email: 'aditya@example.com', branch: 'CSE', semester: 8 },
          { id: 8, name: 'Pooja Nair', email: 'pooja@example.com', branch: 'ECE', semester: 1 },
          { id: 9, name: 'Karan Mehta', email: 'karan@example.com', branch: 'EE', semester: 6 },
          { id: 10, name: 'Ritika Bansal', email: 'ritika@example.com', branch: 'CSE', semester: 4 },
          { id: 11, name: 'Aman Khan', email: 'aman@example.com', branch: 'ME', semester: 5 },
          { id: 12, name: 'Neha Reddy', email: 'neha@example.com', branch: 'IT', semester: 7 },
          { id: 13, name: 'Ishaan Gupta', email: 'ishaan@example.com', branch: 'CE', semester: 3 },
          { id: 14, name: 'Tanya Dey', email: 'tanya@example.com', branch: 'ECE', semester: 2 },
          { id: 15, name: 'Siddharth Bose', email: 'siddharth@example.com', branch: 'CSE', semester: 8 },
        ];

        setUsers(data);
      } catch {
        setError('Failed to load student data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Students</h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((u) => (
              <div
                key={u.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-medium text-blue-600 mb-2">{u.name}</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {u.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Branch:</span> {u.branch}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Semester:</span> {u.semester}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
