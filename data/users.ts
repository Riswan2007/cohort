
import { User, Role } from '../types';

export const users: User[] = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@cohert.com',
    role: Role.ADMIN,
    avatar: 'https://picsum.photos/seed/admin/200',
    password: 'password123',
  },
  {
    id: 2,
    name: 'John Doe (Teacher)',
    email: 'teacher@cohert.com',
    role: Role.TEACHER,
    avatar: 'https://picsum.photos/seed/teacher1/200',
    password: 'password123',
  },
  {
    id: 3,
    name: 'Jane Smith (Student)',
    email: 'student@cohert.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/student1/200',
    password: 'password123',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice@cohert.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/student2/200',
    password: 'password123',
  },
  {
    id: 5,
    name: 'Bob Williams',
    email: 'bob@cohert.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/student3/200',
    password: 'password123',
  },
  {
    id: 6,
    name: 'Dr. Emily Brown',
    email: 'emily@cohert.com',
    role: Role.TEACHER,
    avatar: 'https://picsum.photos/seed/teacher2/200',
    password: 'password123',
  },
];
