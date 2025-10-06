
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../types';
import { courses } from '../data/courses';
import { assignments } from '../data/assignments';
import { users } from '../data/users';
import { CourseCard } from '../components/CourseCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { AnalyticsChart } from '../components/AnalyticsChart';

const StudentDashboard: React.FC = () => {
    const myCourses = courses.slice(0, 2);
    const pendingAssignments = assignments.filter(a => a.status === 'Pending').slice(0, 3);
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {myCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Assignments</h2>
            <Card>
                <CardContent className="p-0">
                    <ul className="divide-y divide-border">
                        {pendingAssignments.map(a => (
                             <li key={a.id} className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{a.title}</p>
                                    <p className="text-sm text-muted-foreground">Due: {a.dueDate}</p>
                                </div>
                                <Link to="/assignments" className="text-sm text-primary-500 hover:underline">View</Link>
                             </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

const TeacherDashboard: React.FC = () => {
    const myCourses = courses.filter(c => c.instructorId === 2);
    return (
         <div>
            <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {myCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
            <h2 className="text-2xl font-semibold mb-4">Recent Submissions</h2>
             <Card>
                <CardContent className="p-4">
                    <p className="text-muted-foreground">No recent submissions to review.</p>
                </CardContent>
            </Card>
        </div>
    );
};

const AdminDashboard: React.FC = () => {
    const totalStudents = users.filter(u => u.role === Role.STUDENT).length;
    const totalCourses = courses.length;
    const totalAssignments = assignments.length;
    
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Students</CardTitle>
                        <CardDescription>Number of active students</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{totalStudents}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Active Courses</CardTitle>
                        <CardDescription>Number of available courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{totalCourses}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Total Submissions</CardTitle>
                        <CardDescription>Assignments submitted</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{assignments.filter(a => a.status !== 'Pending').length}</p>
                    </CardContent>
                </Card>
            </div>
            <AnalyticsChart />
        </div>
    );
};


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  const renderDashboard = () => {
    switch (user?.role) {
      case Role.STUDENT:
        return <StudentDashboard />;
      case Role.TEACHER:
        return <TeacherDashboard />;
      case Role.ADMIN:
        return <AdminDashboard />;
      default:
        return <p>Welcome! Your dashboard is being set up.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome back, {user?.name}!</h1>
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
