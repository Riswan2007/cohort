
export enum Role {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  ADMIN = 'Administrator'
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  password?: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  content: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  instructorId: number;
  thumbnail: string;
  progress: number;
  enrolledStudents: number[];
  lessons: Lesson[];
}

export interface Assignment {
  id: number;
  courseId: number;
  title: string;
  dueDate: string;
  status: 'Submitted' | 'Pending' | 'Graded';
  grade?: string;
}

export interface Notification {
  id: number;
  message: string;
  date: string;
  read: boolean;
}
