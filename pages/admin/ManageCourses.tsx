
import React from 'react';
import { courses } from '../../data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const ManageCourses: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Instructor</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Lessons</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Enrolled</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {courses.map(course => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                        <Link to={`/courses/${course.id}`} className="hover:underline">{course.title}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{course.instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{course.lessons.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{course.enrolledStudents.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <Button variant="secondary" size="sm">Edit</Button>
                        <Button variant="danger" size="sm">Delete</Button>
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

export default ManageCourses;
