// src/context-api/ProfileContext.js
"use client"; // If you use client-side hooks within your context logic

import { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  // In a real app, you'd fetch user roles/profile from an API or authentication state
  const [profileData, setProfileData] = useState({
    isSuperAdmin: false,
    isClient: false,
    isAdmin: false,
    isAgent: false,
  });

  useEffect(() => {
    // Simulate fetching user roles after authentication
    // Replace with actual logic to get user roles (e.g., from a JWT, database)
    const fetchUserRoles = async () => {
      // Example: Fetch from an auth service or local storage
      const userRole = localStorage.getItem('userRole'); // Dummy example
      if (userRole === 'admin') {
        setProfileData({ isSuperAdmin: true, isAgent: false, isAdmin: true, isClient: false });
      } else if (userRole === 'super admin') {
        setProfileData({ isAgent: false, isSuperAdmin: true, isAdmin: false, isClient: false });
      } else if (userRole === 'agent') {
          setProfileData({ isAgent: true, isSuperAdmin: false, isAdmin: false, isClient: false });
      } else if (userRole === 'client') {
          setProfileData({ isAgent: false, isSuperAdmin: false, isAdmin: false, isClient: true });
      } else {
        setProfileData({ isAgent: false, isSuperAdmin: false, isAdmin: false, isClient: false });
      }
    };
    fetchUserRoles();
  }, []);

  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};