'use client'

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from "../lib/supabase";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Dynamically import supabase client to avoid server/client mismatch

        // Get current session
        const { data } = await supabase.auth.getSession();
        const session = data?.session;

        if (session?.user) {
          // Use setTimeout to defer navigation
          setTimeout(() => {
            router.push('/dashboard');
          }, 100);
        } else {
          setTimeout(() => {
            router.push('/auth/login');
          }, 100);
        }
      } catch (error) {
        console.error('Auth error:', error);
        setTimeout(() => {
          router.push('/auth/login');
        }, 100);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []); // Remove router from dependencies

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="text-white text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="text-white text-xl">Redirecting...</div>
    </div>
  );
}