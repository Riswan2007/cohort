
import React from 'react';
import { Notification } from '../types';
import { Card, CardContent } from './ui/Card';

interface NotificationCardProps {
  notification: Notification;
}

const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;

export const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  return (
    <Card className={`mb-4 ${notification.read ? '' : 'border-primary-500 border-l-4'}`}>
      <CardContent className="flex items-start p-4">
        <div className={`mr-4 p-2 rounded-full ${notification.read ? 'bg-secondary' : 'bg-primary-500/20 text-primary-500'}`}>
          <BellIcon />
        </div>
        <div>
          <p className="text-foreground">{notification.message}</p>
          <p className="text-sm text-muted-foreground mt-1">{notification.date}</p>
        </div>
      </CardContent>
    </Card>
  );
};
