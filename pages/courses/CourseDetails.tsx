
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { users } from '../../data/users';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import NotFound from '../NotFound';

const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>;

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === parseInt(id || ''));

  if (!course) {
    return <NotFound />;
  }

  const instructor = users.find(u => u.id === course.instructorId);

  return (
    <div>
        <div className="mb-6">
            <Link to="/courses" className="text-primary-500 hover:underline">&larr; Back to Courses</Link>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card>
                <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover rounded-t-lg" />
                <CardHeader>
                    <CardTitle className="text-3xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{course.description}</p>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Lessons</h3>
                    <ul className="space-y-3">
                        {course.lessons.map((lesson, index) => (
                            <li key={lesson.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                <div className="flex items-center">
                                    <span className="text-primary-500 mr-4"><PlayIcon/></span>
                                    <div>
                                        <p className="font-medium">{index + 1}. {lesson.title}</p>
                                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                    </div>
                                </div>
                                <button className="text-sm text-primary-500 hover:underline">Start</button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-secondary rounded-full h-4">
                <div
                  className="bg-primary-500 h-4 rounded-full text-center text-white text-xs"
                  style={{ width: `${course.progress}%` }}
                >
                  {course.progress}%
                </div>
              </div>
            </CardContent>
          </Card>
          {instructor && (
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <img src={instructor.avatar} alt={instructor.name} className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-semibold">{instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{instructor.role}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
