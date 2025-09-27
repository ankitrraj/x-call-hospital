"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, UserPlus, RotateCcw, XCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

function KPICard({ title, value, icon: Icon, trend, color }: KPICardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            {trend && (
              <div className="flex items-center mt-2">
                {trend.isPositive ? (
                  <TrendingUp className="size-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="size-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trend.value}% vs yesterday
                </span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="size-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KPICards() {
  const kpiData = [
    {
      title: 'Total Appointments Today',
      value: 47,
      icon: Calendar,
      trend: { value: 12, isPositive: true },
      color: 'bg-blue-500',
    },
    {
      title: 'New Appointments',
      value: 23,
      icon: UserPlus,
      trend: { value: 8, isPositive: true },
      color: 'bg-green-500',
    },
    {
      title: 'Repeated Appointments',
      value: 18,
      icon: RotateCcw,
      trend: { value: 3, isPositive: false },
      color: 'bg-orange-500',
    },
    {
      title: 'Cancelled / No-Show',
      value: 6,
      icon: XCircle,
      trend: { value: 15, isPositive: false },
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {kpiData.map((item, index) => (
        <KPICard key={index} {...item} />
      ))}
    </div>
  );
}
