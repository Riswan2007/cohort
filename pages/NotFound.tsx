
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold text-primary-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-muted-foreground mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
