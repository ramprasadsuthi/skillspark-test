import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen" style={{ backgroundImage: 'var(--bg-gradient)', color: 'white' }}>
      <h1 className="text-3xl font-display font-bold mb-4 text-white">Admin Dashboard</h1>
      <p className="text-gray-200">Welcome to the Admin Panel. Here you can manage questions, users, and settings.</p>
      {/* Add more admin functionalities here */}
      <div className="mt-8">
        <h2 className="text-2xl font-display font-bold mb-3 text-white">Questions Management</h2>
        <p className="text-gray-200">Functionality to add, edit, or delete questions will be implemented here.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-display font-bold mb-3 text-white">User Management</h2>
        <p className="text-gray-200">Functionality to view or manage users will be implemented here.</p>
      </div>
    </div>
  );
};

export default AdminPage;
