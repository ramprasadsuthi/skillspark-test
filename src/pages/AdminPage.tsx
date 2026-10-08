import React, { useEffect } from "react";

const AdminPage: React.FC = () => {
  useEffect(() => {
    // Redirect to the standalone Playwright Locator Playground page
    // Using window.location.href to navigate outside the React SPA
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/index\.html$/, "");
    window.location.href = `${baseUrl}/playwright-playground.html`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-[#E2E8F0]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1] mx-auto mb-4" />
        <p className="text-lg">Redirecting to Playwright Locator Playground...</p>
      </div>
    </div>
  );
};

export default AdminPage;