"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    isSuperAdmin: false,
    isClient: false,
    isAdmin: false,
    isAgent: false,
    user: null,
    loading: true,
  });


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded JWT:', decoded);
        const role = decoded.role;

        const roleFlags = {
          isSuperAdmin: role === "super-admin" || role === "super admin",
          isAdmin: role === "admin",
          isAgent: role === "agent",
          isClient: role === "client",
          user: decoded,
          loading: false,
        };
        setProfileData(roleFlags);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
        setProfileData((prev) => ({ ...prev, loading: false }));
      }
    } else {
      setProfileData((prev) => ({ ...prev, loading: false }));
    }
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
