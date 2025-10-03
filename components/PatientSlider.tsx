"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, RefreshCw, Phone, User, Calendar } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  contact: string;
  issue: string;
  doctor: string;
  time: string;
  status: 'waiting' | 'in-progress' | 'completed';
}

const patientsData: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    age: 45,
    contact: '+91 98765 43210',
    issue: 'Chest Pain',
    doctor: 'Dr. Johnson',
    time: '10:30 AM',
    status: 'waiting',
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    age: 32,
    contact: '+91 98765 43211',
    issue: 'Fever & Headache',
    doctor: 'Dr. Smith',
    time: '11:00 AM',
    status: 'in-progress',
  },
  {
    id: '3',
    name: 'Mike Brown',
    age: 28,
    contact: '+91 98765 43212',
    issue: 'Regular Checkup',
    doctor: 'Dr. Williams',
    time: '11:30 AM',
    status: 'waiting',
  },
  {
    id: '4',
    name: 'Emily Davis',
    age: 55,
    contact: '+91 98765 43213',
    issue: 'Back Pain',
    doctor: 'Dr. Brown',
    time: '12:00 PM',
    status: 'waiting',
  },
  {
    id: '5',
    name: 'Robert Taylor',
    age: 38,
    contact: '+91 98765 43214',
    issue: 'Skin Allergy',
    doctor: 'Dr. Davis',
    time: '12:30 PM',
    status: 'completed',
  },
];

function PatientCard({ patient }: { patient: Patient }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="min-w-[300px] hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{patient.name}</h3>
              <p className="text-sm text-gray-500">Age: {patient.age}</p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
            {patient.status.replace('-', ' ')}
          </span>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            <span>{patient.contact}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{patient.time}</span>
          </div>
          <div className="mt-3">
            <p className="font-medium text-gray-900">Issue: {patient.issue}</p>
            <p className="text-gray-600">Assigned to: {patient.doctor}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PatientSlider() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Today's Patients</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Import Patients
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync from Calls
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {patientsData.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
