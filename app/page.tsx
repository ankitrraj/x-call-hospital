"use client"

import { Layout } from '@/components/Layout';
import { KPICards } from '@/components/KPICards';
import { ChartsSection } from '@/components/ChartsSection';
import { PatientSlider } from '@/components/PatientSlider';
import { DoctorSection } from '@/components/DoctorSection';
import { NotificationsSection } from '@/components/NotificationsSection';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening at SMS Hospital today.</p>
          </div>
          <div className="text-sm text-gray-500">
            Today • {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Charts Section */}
        <ChartsSection />

        {/* Patient Slider */}
        <PatientSlider />

        {/* Doctor Section */}
        <DoctorSection />

        {/* Notifications & Reports */}
        <NotificationsSection />
      </div>
    </Layout>
  );
}
