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
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Fetch error');
        const data = await res.json();
        setUsers(data);
      } catch {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Users</h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map(u => (
              <div
                key={u.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-medium text-blue-600 mb-2">{u.name}</h3>
                <p className="text-gray-700"><span className="font-semibold">Email:</span> {u.email}</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> {u.phone}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Website:</span>{' '}
                  <a
                    href={http://${u.website}}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {u.website}
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
