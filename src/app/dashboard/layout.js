"use client";
import React from 'react';
import DashHeader from '@/components/Dashboard/DashHeader';
import DashMenu from '@/components/Dashboard/DashMenu'; 
import { ProfileProvider } from '@/context-api/ProfileContext';
import ProtectedRoute from '@/components/Auth/ProtectedRoute';

export default function DashboardLayout({ children }) {
  return (
    <ProfileProvider>
      <ProtectedRoute>
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans text-gray-900">
          <DashHeader />    
          <div className="flex flex-row flex-1">
            <DashMenu />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </ProtectedRoute>
    </ProfileProvider>
  );
}
