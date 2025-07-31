"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/context-api/ProfileContext";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useProfile();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);
    
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
 }

  if (!user) {
    return null;
  }

  return children;
}
