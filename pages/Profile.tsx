
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="text-center">
            <CardContent className="p-6">
              <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.role}</p>
              <Button className="mt-4 w-full">Change Avatar</Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input label="Full Name" id="name" defaultValue={user.name} />
              <Input label="Email Address" id="email" type="email" defaultValue={user.email} />
              <div className="text-right">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password. Make sure it's a strong one.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input label="Current Password" id="current-password" type="password" />
              <Input label="New Password" id="new-password" type="password" />
              <Input label="Confirm New Password" id="confirm-password" type="password" />
              <div className="text-right">
                <Button>Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
