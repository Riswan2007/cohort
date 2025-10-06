
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const CreateCourse: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lessons, setLessons] = useState([{ title: '', duration: '' }]);

  const handleLessonChange = (index: number, field: string, value: string) => {
    const newLessons = [...lessons];
    newLessons[index] = { ...newLessons[index], [field]: value };
    setLessons(newLessons);
  };

  const addLesson = () => {
    setLessons([...lessons, { title: '', duration: '' }]);
  };

  const removeLesson = (index: number) => {
    const newLessons = lessons.filter((_, i) => i !== index);
    setLessons(newLessons);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ courseTitle, courseDescription, lessons });
    alert('Course created successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Course</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input id="courseTitle" label="Course Title" value={courseTitle} onChange={e => setCourseTitle(e.target.value)} required />
            <div>
              <label htmlFor="courseDescription" className="block text-sm font-medium text-foreground mb-1">Course Description</label>
              <textarea
                id="courseDescription"
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-card"
                value={courseDescription}
                onChange={e => setCourseDescription(e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            {lessons.map((lesson, index) => (
              <div key={index} className="flex items-center gap-4 mb-4 p-4 border border-border rounded-md">
                <Input label={`Lesson ${index + 1} Title`} value={lesson.title} onChange={e => handleLessonChange(index, 'title', e.target.value)} className="flex-grow"/>
                <Input label="Duration (e.g., 15m)" value={lesson.duration} onChange={e => handleLessonChange(index, 'duration', e.target.value)} className="w-32" />
                <Button type="button" variant="danger" onClick={() => removeLesson(index)} className="self-end">Remove</Button>
              </div>
            ))}
            <Button type="button" variant="secondary" onClick={addLesson}>Add Lesson</Button>
          </CardContent>
        </Card>
        <div className="mt-6 text-right">
          <Button type="submit">Create Course</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
