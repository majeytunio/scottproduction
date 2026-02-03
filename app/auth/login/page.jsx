// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { 
//   EyeIcon, 
//   EyeSlashIcon, 
//   EnvelopeIcon, 
//   LockClosedIcon,
//   ArrowPathIcon,
//   XCircleIcon,
//   ArrowLeftIcon
// } from '@heroicons/react/24/outline';
// import { supabase } from '../../../lib/supabase';
// import { Toaster, toast } from 'react-hot-toast';

// // A more robust loading spinner component for a cleaner UI
// const LoadingSpinner = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--black)] text-[var(--gold)]">
//     <ArrowPathIcon className="w-8 h-8 animate-spin mb-4" />
//     <p>Checking session...</p>
//   </div>
// );

// // A simple retry-on-error component
// const RetryComponent = ({ error, onRetry }) => (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--black)] text-[var(--gold)]">
//     <XCircleIcon className="w-8 h-8 text-[var(--red-500)] mb-4" />
//     <p className="text-[var(--red-500)] mb-4 text-center">{error}</p>
//     <button
//       onClick={onRetry}
//       className="px-4 py-2 bg-[var(--gold)] text-[var(--black)] rounded-md hover:bg-[var(--gold-light)] font-semibold"
//     >
//       Retry
//     </button>
//   </div>
// );

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [sessionError, setSessionError] = useState(null);
//   const [isResetMode, setIsResetMode] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [isSendingReset, setIsSendingReset] = useState(false);
//   const [formState, setFormState] = useState({
//     email: '',
//     password: '',
//   });

//   // Effect to check for an existing user session on component mount
//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
//         if (sessionError) {
//           throw sessionError;
//         }

//         if (session?.user) {
//           router.push('/');
//         } else {
//           setIsLoading(false);
//         }
//       } catch (err) {
//         // If there's a session check error, we'll display a retry button
//         setSessionError(err.message || 'Failed to connect to the authentication service.');
//         setIsLoading(false);
//       }
//     };

//     checkSession();
//   }, [router]);

//   // Function to handle the login form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const { email, password } = formState;

//     // Use toast.promise for a better UX with async operations
//     await toast.promise(
//       supabase.auth.signInWithPassword({ email, password }),
//       {
//         loading: 'Signing in...',
//         success: (res) => {
//           if (res.error) throw res.error;
//           // After successful login, redirect to the dashboard
//           setTimeout(() => {
//             router.push('/');
//           }, 1000);
//           return 'Login successful! Redirecting...';
//         },
//         error: (err) => {
//           // If login fails, display the error message
//           return err.message || 'Login failed.';
//         },
//       }
//     );
    
//     setIsSubmitting(false);
//   };

//   // Function to handle password reset
//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setIsSendingReset(true);

//     if (!resetEmail) {
//       toast.error('Please enter your email address');
//       setIsSendingReset(false);
//       return;
//     }

//     await toast.promise(
//       supabase.auth.resetPasswordForEmail(resetEmail, {
//         redirectTo: `${window.location.origin}/auth/update-password`,
//       }),
//       {
//         loading: 'Sending reset link...',
//         success: () => {
//           setIsResetMode(false);
//           setResetEmail('');
//           return 'Password reset link sent! Check your email.';
//         },
//         error: (err) => {
//           return err.message || 'Failed to send reset link.';
//         },
//       }
//     );

//     setIsSendingReset(false);
//   };

//   // Handler for form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handler for navigating to the signup page
//   const handleCreateAccount = () => {
//     router.push('/auth/signup');
//   };

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   if (sessionError) {
//     return <RetryComponent error={sessionError} onRetry={() => {
//       setIsLoading(true);
//       setSessionError(null);
//     }} />;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--black)] px-4">
//       <Toaster position="top-right" />
      
//       {isResetMode ? (
//         // Password Reset Form
//         <form 
//           onSubmit={handlePasswordReset} 
//           className="w-full max-w-md bg-[var(--gray-dark)] p-8 rounded-xl shadow-md border border-[var(--gold)]"
//         >
//           <button
//             type="button"
//             onClick={() => setIsResetMode(false)}
//             className="flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] mb-4"
//           >
//             <ArrowLeftIcon className="w-4 h-4 mr-1" />
//             Back to Login
//           </button>

//           <h2 className="text-2xl font-bold mb-6 text-[var(--gold)] text-center">Reset Password</h2>

//           <p className="text-[var(--gold-light)] text-sm mb-6 text-center">
//             Enter your email address and we'll send you a link to reset your password.
//           </p>

//           {/* Email Input for Reset */}
//           <div className="mb-5">
//             <label htmlFor="reset-email" className="block mb-1 text-sm font-medium text-[var(--gold)]">
//               Email
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gold)]">
//                 <EnvelopeIcon className="w-5 h-5" />
//               </span>
//               <input
//                 type="email"
//                 id="reset-email"
//                 value={resetEmail}
//                 onChange={(e) => setResetEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-2 border border-[var(--gold)] rounded-md focus:ring-2 focus:ring-[var(--gold)] bg-[var(--black)] text-[var(--gold)] placeholder-[var(--gold-light)]"
//                 required
//               />
//             </div>
//           </div>

//           {/* Send Reset Link Button */}
//           <button 
//             type="submit" 
//             disabled={isSendingReset}
//             className="w-full py-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--black)] font-semibold rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSendingReset ? (
//               <>
//                 <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
//                 Sending...
//               </>
//             ) : 'Send Reset Link'}
//           </button>
//         </form>
//       ) : (
//         // Login Form
//         <form 
//           onSubmit={handleSubmit} 
//           className="w-full max-w-md bg-[var(--gray-dark)] p-8 rounded-xl shadow-md border border-[var(--gold)]"
//         >
//           <h2 className="text-2xl font-bold mb-6 text-[var(--gold)] text-center">Login to Your Account</h2>

//           {/* Email Input Field */}
//           <div className="mb-5">
//             <label htmlFor="email" className="block mb-1 text-sm font-medium text-[var(--gold)]">
//               Email
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gold)]">
//                 <EnvelopeIcon className="w-5 h-5" />
//               </span>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formState.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-2 border border-[var(--gold)] rounded-md focus:ring-2 focus:ring-[var(--gold)] bg-[var(--black)] text-[var(--gold)] placeholder-[var(--gold-light)]"
//               />
//             </div>
//           </div>

//           {/* Password Input Field */}
//           <div className="mb-5">
//             <label htmlFor="password" className="block mb-1 text-sm font-medium text-[var(--gold)]">
//               Password
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gold)]">
//                 <LockClosedIcon className="w-5 h-5" />
//               </span>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 required
//                 value={formState.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-10 py-2 border border-[var(--gold)] rounded-md focus:ring-2 focus:ring-[var(--gold)] bg-[var(--black)] text-[var(--gold)] placeholder-[var(--gold-light)]"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gold)]"
//               >
//                 {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password Link */}
//           <div className="mb-5 text-right">
//             <button
//               type="button"
//               onClick={() => setIsResetMode(true)}
//               className="text-[var(--gold)] hover:text-[var(--gold-light)] text-sm"
//             >
//               Forgot your password?
//             </button>
//           </div>

//           {/* Login Button */}
//           <button 
//             type="submit" 
//             disabled={isSubmitting} // Disable the button while submitting
//             className="w-full py-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--black)] font-semibold rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <>
//                 <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
//                 Signing In...
//               </>
//             ) : 'Sign In'}
//           </button>

//           {/* Create Account Button */}
//           <button
//             type="button"
//             onClick={handleCreateAccount}
//             className="mt-3 w-full py-2 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--black)] font-semibold rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={isSubmitting}
//           >
//             Create New Account
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }















'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          setTimeout(() => {
            router.push('/dashboard');
          }, 0);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 100);
      
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🎯 Production Dashboard</h1>
          <p className="text-white/80">Sign in to access the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/70 text-sm">
            Contact admin for account access
          </p>
        </div>
      </div>
    </div>
  );
}