
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Role } from '../../types';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('student@cohert.com');
  const [password, setPassword] = useState('password123');
  const [role, setRole] = useState<Role>(Role.STUDENT);
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = auth.login(email, password, role);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials or role. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500">Cohert</h1>
            <h2 className="text-2xl font-semibold mt-2">Welcome Back!</h2>
            <p className="text-muted-foreground">Sign in to continue your learning journey.</p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-md border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input id="email" type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input id="password" type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">Role</label>
              <select id="role" value={role} onChange={e => setRole(e.target.value as Role)} className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-card">
                <option value={Role.STUDENT}>Student</option>
                <option value={Role.TEACHER}>Teacher</option>
                <option value={Role.ADMIN}>Administrator</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account? <Link to="/register" className="font-medium text-primary-500 hover:underline">Sign Up</Link>
            </p>
            <p className="mt-2">
              <Link to="/forgot-password" className="font-medium text-primary-500 hover:underline">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
