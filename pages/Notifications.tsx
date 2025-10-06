
import React from 'react';
import { notifications } from '../data/notifications';
import { NotificationCard } from '../components/NotificationCard';
import { Button } from '../components/ui/Button';

const Notifications: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="secondary">Mark all as read</Button>
      </div>
      <div className="max-w-3xl mx-auto">
        {notifications.map(notification => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
