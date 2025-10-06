
import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React, including components, state, props, and hooks.',
    instructor: 'John Doe (Teacher)',
    instructorId: 2,
    thumbnail: 'https://picsum.photos/seed/react/600/400',
    progress: 75,
    enrolledStudents: [3, 4],
    lessons: [
      { id: 1, title: 'Component Basics', duration: '15m', videoUrl: '', content: '...' },
      { id: 2, title: 'State and Props', duration: '25m', videoUrl: '', content: '...' },
      { id: 3, title: 'Handling Events', duration: '20m', videoUrl: '', content: '...' },
      { id: 4, title: 'Introduction to Hooks', duration: '30m', videoUrl: '', content: '...' },
    ]
  },
  {
    id: 2,
    title: 'Advanced Tailwind CSS',
    description: 'Master Tailwind CSS with advanced techniques like custom configurations and plugins.',
    instructor: 'Dr. Emily Brown',
    instructorId: 6,
    thumbnail: 'https://picsum.photos/seed/tailwind/600/400',
    progress: 40,
    enrolledStudents: [3, 5],
    lessons: [
      { id: 1, title: 'Theming', duration: '20m', videoUrl: '', content: '...' },
      { id: 2, title: 'Responsive Design', duration: '30m', videoUrl: '', content: '...' },
      { id: 3, title: 'Dark Mode', duration: '15m', videoUrl: '', content: '...' },
    ]
  },
  {
    id: 3,
    title: 'Data Structures in JavaScript',
    description: 'Understand common data structures and algorithms using JavaScript.',
    instructor: 'John Doe (Teacher)',
    instructorId: 2,
    thumbnail: 'https://picsum.photos/seed/ds/600/400',
    progress: 0,
    enrolledStudents: [4, 5],
    lessons: [
       { id: 1, title: 'Arrays & Stacks', duration: '35m', videoUrl: '', content: '...' },
       { id: 2, title: 'Queues & Linked Lists', duration: '40m', videoUrl: '', content: '...' },
       { id: 3, title: 'Trees & Graphs', duration: '50m', videoUrl: '', content: '...' },
    ]
  }
];
