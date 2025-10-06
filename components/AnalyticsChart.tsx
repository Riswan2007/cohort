
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const data = [
  { name: 'Jan', students: 400, submissions: 240 },
  { name: 'Feb', students: 300, submissions: 139 },
  { name: 'Mar', students: 200, submissions: 980 },
  { name: 'Apr', students: 278, submissions: 390 },
  { name: 'May', students: 189, submissions: 480 },
  { name: 'Jun', students: 239, submissions: 380 },
  { name: 'Jul', students: 349, submissions: 430 },
];

export const AnalyticsChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                      }}
                    />
                    <Legend iconSize={10} />
                    <Bar dataKey="students" fill="#3b82f6" name="New Students" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="submissions" fill="#8b5cf6" name="Submissions" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
