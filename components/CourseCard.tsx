
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { Card, CardContent } from './ui/Card';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link to={`/courses/${course.id}`}>
        <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 truncate">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">By {course.instructor}</p>
          <div className="w-full bg-secondary rounded-full h-2.5">
            <div
              className="bg-primary-500 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-right mt-1 text-muted-foreground">{course.progress}% Complete</p>
        </CardContent>
      </Link>
    </Card>
  );
};
