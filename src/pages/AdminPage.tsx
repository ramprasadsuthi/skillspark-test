import React from "react";

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-[#94A3B8]">
            Manage questions, users, and platform settings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Questions Management */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition">
            <h2 className="text-xl font-semibold mb-2 text-[#6366F1]">
              Questions Management
            </h2>
            <p className="text-[#94A3B8] mb-4">
              Add, edit, or delete questions for different technologies and levels.
            </p>

            <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-4 py-2 rounded-lg text-sm">
              Manage Questions
            </button>
          </div>

          {/* User Management */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition">
            <h2 className="text-xl font-semibold mb-2 text-[#22D3EE]">
              User Management
            </h2>
            <p className="text-[#94A3B8] mb-4">
              View users, track progress, and manage access.
            </p>

            <button className="bg-[#22D3EE] hover:bg-[#06B6D4] text-black px-4 py-2 rounded-lg text-sm">
              Manage Users
            </button>
          </div>

          {/* Settings */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Platform Settings
            </h2>
            <p className="text-[#94A3B8] mb-4">
              Configure system settings, test rules, and configurations.
            </p>

            <button className="border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white px-4 py-2 rounded-lg text-sm">
              Open Settings
            </button>
          </div>

          {/* Analytics (Bonus Section) */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Analytics
            </h2>
            <p className="text-[#94A3B8] mb-4">
              Monitor test performance, results, and engagement.
            </p>

            <button className="border border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-black px-4 py-2 rounded-lg text-sm">
              View Analytics
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPage;