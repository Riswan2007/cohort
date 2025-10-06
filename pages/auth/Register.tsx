
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Role } from '../../types';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>(Role.STUDENT);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // In a real app, you would call an API to register the user.
    // For this demo, we'll just log it and redirect.
    if (name && email && password) {
        console.log({ name, email, password, role });
        // Simulate successful registration
        alert('Registration successful! Please log in.');
        navigate('/login');
    } else {
        setError('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500">Cohert</h1>
            <h2 className="text-2xl font-semibold mt-2">Create an Account</h2>
            <p className="text-muted-foreground">Join our community of learners and educators.</p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-md border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input id="name" type="text" label="Full Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input id="email" type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input id="password" type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">I am a</label>
              <select id="role" value={role} onChange={e => setRole(e.target.value as Role)} className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-card">
                <option value={Role.STUDENT}>Student</option>
                <option value={Role.TEACHER}>Teacher</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account? <Link to="/login" className="font-medium text-primary-500 hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
