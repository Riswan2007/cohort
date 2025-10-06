
import React from 'react';
import { assignments } from '../data/assignments';
import { courses } from '../data/courses';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Assignments: React.FC = () => {

  const getCourseTitle = (courseId: number) => {
    return courses.find(c => c.id === courseId)?.title || 'Unknown Course';
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Submitted': return 'bg-yellow-500';
      case 'Graded': return 'bg-green-500';
      case 'Pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Assignment</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Due Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Grade</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {assignments.map(assignment => (
                  <tr key={assignment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{getCourseTitle(assignment.courseId)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{assignment.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{assignment.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white ${getStatusColor(assignment.status)}`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{assignment.grade || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {assignment.status === 'Pending' && <Button size="sm">Submit</Button>}
                      {assignment.status !== 'Pending' && <Button size="sm" disabled>View</Button>}
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

export default Assignments;
