"use client"

import { motion } from 'framer-motion';
import KPICards from '@/components/KPICards';
import ChartsSection from '@/components/ChartsSection';
import PatientSlider from '@/components/PatientSlider';
import DoctorSection from '@/components/DoctorSection';
import NotificationsSection from '@/components/NotificationsSection';
import Layout from '@/components/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function DashboardPage() {
  return (
    <Layout>
      <motion.div 
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        {/* KPI Cards */}
        <motion.div variants={fadeInUp}>
          <KPICards />
        </motion.div>

        {/* Charts Section */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
          <ChartsSection />
        </motion.div>

        {/* Patient Management */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
          <PatientSlider />
        </motion.div>

        {/* Doctor Section */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
          <DoctorSection />
        </motion.div>

        {/* Notifications & Reports */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <NotificationsSection />
        </motion.div>
      </motion.div>
    </Layout>
  );
}
