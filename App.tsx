
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// Fix: Corrected import for useAuth from hooks/useAuth
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Role } from './types';

// Lazy load pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CoursesList = lazy(() => import('./pages/courses/CoursesList'));
const CourseDetails = lazy(() => import('./pages/courses/CourseDetails'));
const Assignments = lazy(() => import('./pages/Assignments'));
const Profile = lazy(() => import('./pages/Profile'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Analytics = lazy(() => import('./pages/admin/Analytics'));
const CreateCourse = lazy(() => import('./pages/admin/CreateCourse'));
const ManageCourses = lazy(() => import('./pages/admin/ManageCourses'));
const ManageUsers = lazy(() => import('./pages/admin/ManageUsers'));
const MarkManagement = lazy(() => import('./pages/admin/MarkManagement'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();
    
    return (
        <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
            <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/" /> : <ForgotPassword />} />
            
            {/* Protected Routes inside Layout */}
            <Route path="/*" element={
                <ProtectedRoute allowedRoles={[Role.STUDENT, Role.TEACHER, Role.ADMIN]}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/courses" element={<CoursesList />} />
                            <Route path="/courses/:id" element={<CourseDetails />} />
                            <Route path="/assignments" element={<Assignments />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/notifications" element={<Notifications />} />

                            {/* Teacher & Admin Routes */}
                            <Route path="/admin/mark-management" element={
                                <ProtectedRoute allowedRoles={[Role.TEACHER, Role.ADMIN]}>
                                    <MarkManagement />
                                </ProtectedRoute>
                            }/>

                            {/* Admin Only Routes */}
                             <Route path="/admin/analytics" element={
                                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                                    <Analytics />
                                </ProtectedRoute>
                            }/>
                            <Route path="/admin/create-course" element={
                                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                                    <CreateCourse />
                                </ProtectedRoute>
                            }/>
                            <Route path="/admin/manage-courses" element={
                                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                                    <ManageCourses />
                                </ProtectedRoute>
                            }/>
                            <Route path="/admin/manage-users" element={
                                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                                    <ManageUsers />
                                </ProtectedRoute>
                            }/>

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </ProtectedRoute>
            } />
        </Routes>
    );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
        <AuthProvider>
            <HashRouter>
                <Suspense fallback={<div className="flex items-center justify-center h-screen w-screen">Loading...</div>}>
                    <AppRoutes />
                </Suspense>
            </HashRouter>
        </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
