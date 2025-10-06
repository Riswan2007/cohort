
import React from 'react';
import { AnalyticsChart } from '../../components/AnalyticsChart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { users } from '../../data/users';
import { courses } from '../../data/courses';
import { assignments } from '../../data/assignments';
import { Role } from '../../types';

const Analytics: React.FC = () => {
    const totalStudents = users.filter(u => u.role === Role.STUDENT).length;
    const totalTeachers = users.filter(u => u.role === Role.TEACHER).length;
    const totalCourses = courses.length;
    const submittedAssignments = assignments.filter(a => a.status !== 'Pending').length;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{totalStudents}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Teachers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{totalTeachers}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{totalCourses}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{submittedAssignments}</p>
                    </CardContent>
                </Card>
            </div>
            <AnalyticsChart />
        </div>
    );
};

export default Analytics;
