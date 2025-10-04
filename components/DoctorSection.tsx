"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, UserCheck } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  phone: string;
  status: string;
  patientsHandled: number;
  avgResponseTime: string;
  availability: string;
}

const doctorsData: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Johnson',
    specialization: 'Cardiologist',
    phone: '+91 98765 43210',
    status: 'online',
    patientsHandled: 28,
    avgResponseTime: '5 min',
    availability: '9:00 AM - 6:00 PM',
  },
  {
    id: '2',
    name: 'Dr. Smith',
    specialization: 'General Medicine',
    phone: '+91 98765 43211',
    status: 'busy',
    patientsHandled: 35,
    avgResponseTime: '8 min',
    availability: '10:00 AM - 7:00 PM',
  },
  {
    id: '3',
    name: 'Dr. Williams',
    specialization: 'Pediatrician',
    phone: '+91 98765 43212',
    status: 'online',
    patientsHandled: 22,
    avgResponseTime: '4 min',
    availability: '8:00 AM - 5:00 PM',
  },
  {
    id: '4',
    name: 'Dr. Brown',
    specialization: 'Orthopedic',
    phone: '+91 98765 43213',
    status: 'offline',
    patientsHandled: 31,
    avgResponseTime: '12 min',
    availability: '2:00 PM - 9:00 PM',
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'busy':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Available';
      case 'busy':
        return 'Busy';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white ${getStatusColor(doctor.status)}`}></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialization}</p>
              <p className="text-xs text-gray-400">{getStatusText(doctor.status)}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <div>
              <p className="font-medium text-gray-900">{doctor.patientsHandled}</p>
              <p className="text-xs">Patients Today</p>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <div>
              <p className="font-medium text-gray-900">{doctor.avgResponseTime}</p>
              <p className="text-xs">Avg Response</p>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">Available: {doctor.availability}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DoctorSection() {
  const [autoAssign, setAutoAssign] = React.useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Doctor Availability */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctorsData.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Doctor Management */}
      <div className="space-y-6">
        {/* Auto Assignment */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Auto Assignment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Auto-assign Doctor</span>
              <button
                onClick={() => setAutoAssign(!autoAssign)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                style={{ backgroundColor: autoAssign ? '#F97316' : '#D1D5DB' }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoAssign ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Automatically assign patients to available doctors based on specialization and workload.
            </p>
            <Button className="w-full" variant="outline">
              Manual Assign
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Doctors Online</span>
              <span className="font-semibold text-green-600">2/4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Average Wait Time</span>
              <span className="font-semibold">7 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Consultations</span>
              <span className="font-semibold">116</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
