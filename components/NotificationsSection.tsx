"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, AlertTriangle, Star, Download } from 'lucide-react';

interface Notification {
  id: string;
  type: 'whatsapp' | 'sms' | 'call' | 'emergency' | 'feedback';
  title: string;
  message: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
  isRead: boolean;
}

const notificationsData: Notification[] = [
  {
    id: '1',
    type: 'emergency',
    title: 'Emergency Alert',
    message: 'Patient John Smith requires immediate attention - Chest Pain',
    time: '2 min ago',
    priority: 'high',
    isRead: false,
  },
  {
    id: '2',
    type: 'call',
    title: 'Missed Callback',
    message: 'Sarah Wilson - Follow-up call not answered (3rd attempt)',
    time: '15 min ago',
    priority: 'medium',
    isRead: false,
  },
  {
    id: '3',
    type: 'whatsapp',
    title: 'WhatsApp Message',
    message: 'Patient Mike Brown confirmed appointment for tomorrow 10 AM',
    time: '1 hour ago',
    priority: 'low',
    isRead: true,
  },
  {
    id: '4',
    type: 'feedback',
    title: 'Patient Feedback',
    message: 'Emily Davis rated Dr. Johnson 5 stars - "Excellent service"',
    time: '2 hours ago',
    priority: 'low',
    isRead: true,
  },
  {
    id: '5',
    type: 'sms',
    title: 'SMS Alert',
    message: 'Appointment reminder sent to 15 patients for tomorrow',
    time: '3 hours ago',
    priority: 'medium',
    isRead: true,
  },
];

function NotificationItem({ notification }: { notification: Notification }) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'sms':
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case 'call':
        return <Phone className="h-5 w-5 text-orange-500" />;
      case 'emergency':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'feedback':
        return <Star className="h-5 w-5 text-yellow-500" />;
      default:
        return <MessageSquare className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className={`p-4 border-l-4 ${getPriorityColor(notification.priority)} ${
      !notification.isRead ? 'bg-blue-50 border-l-blue-500' : ''
    } hover:bg-gray-50 transition-colors cursor-pointer`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {getIcon(notification.type)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className={`text-sm font-medium ${
              !notification.isRead ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {notification.title}
            </h4>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
        </div>
        {!notification.isRead && (
          <div className="flex-shrink-0">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export function NotificationsSection() {
  const unreadCount = notificationsData.filter(n => !n.isRead).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Notifications List */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                Notifications & Alerts
                {unreadCount > 0 && (
                  <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                    {unreadCount}
                  </span>
                )}
              </CardTitle>
              <Button variant="outline" size="sm">
                Mark All Read
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {notificationsData.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports & Feedback */}
      <div className="space-y-6">
        {/* Patient Feedback Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Feedback Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Rating</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="font-semibold">4.8/5</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Reviews</span>
              <span className="font-semibold">127</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Positive Feedback</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
            <div className="pt-2 border-t">
              <p className="text-xs text-gray-500 mb-2">Recent Complaint:</p>
              <p className="text-sm text-gray-700">"Long waiting time in queue"</p>
              <p className="text-xs text-gray-500 mt-1">- Patient #1234</p>
            </div>
          </CardContent>
        </Card>

        {/* Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Daily Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Weekly Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Monthly Analytics
            </Button>
            <div className="pt-2 border-t">
              <p className="text-xs text-gray-500">Last generated: Today, 9:00 AM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
