
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    // In a real app, send a reset link to the email.
    if (email) {
      console.log(`Password reset requested for: ${email}`);
      setMessage('If an account with that email exists, a password reset link has been sent.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500">Cohert</h1>
            <h2 className="text-2xl font-semibold mt-2">Reset Password</h2>
            <p className="text-muted-foreground">Enter your email to receive a reset link.</p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-md border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input id="email" type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            {message && <p className="text-green-600 text-sm">{message}</p>}
            <Button type="submit" className="w-full">Send Reset Link</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Remember your password? <Link to="/login" className="font-medium text-primary-500 hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
