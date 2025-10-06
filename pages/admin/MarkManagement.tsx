
import React, { useState } from 'react';
import { assignments } from '../../data/assignments';
import { users } from '../../data/users';
import { courses } from '../../data/courses';
import { Card, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const MarkManagement: React.FC = () => {
    const [grades, setGrades] = useState<{ [key: number]: string }>({});

    const handleGradeChange = (assignmentId: number, grade: string) => {
        setGrades(prev => ({ ...prev, [assignmentId]: grade }));
    };

    const studentSubmissions = assignments.filter(a => a.status !== 'Pending');

    const getCourseTitle = (courseId: number) => courses.find(c => c.id === courseId)?.title || 'N/A';
    // This is a mock; in a real app, you'd have student ID on the assignment
    const getStudentName = () => users.find(u => u.id === 3)?.name || 'N/A';

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Mark Management</h1>
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-border">
                            <thead className="bg-secondary">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Student</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Course</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Assignment</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Grade</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-card divide-y divide-border">
                                {studentSubmissions.map(a => (
                                    <tr key={a.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{getStudentName()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{getCourseTitle(a.courseId)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{a.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{a.status}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <Input
                                                type="text"
                                                className="w-20"
                                                defaultValue={a.grade}
                                                onChange={(e) => handleGradeChange(a.id, e.target.value)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <Button size="sm">Update</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MarkManagement;
