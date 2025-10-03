"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Hospital, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const hospitals = [
  { id: 1, name: 'SMS Hospital', code: 'SMS', city: 'Jaipur' },
  { id: 2, name: 'Apollo Hospital', code: 'APOLLO', city: 'Delhi' },
  { id: 3, name: 'Fortis Hospital', code: 'FORTIS', city: 'Mumbai' },
  { id: 4, name: 'Max Hospital', code: 'MAX', city: 'Bangalore' },
  { id: 5, name: 'AIIMS', code: 'AIIMS', city: 'Delhi' },
  { id: 6, name: 'Medanta', code: 'MEDANTA', city: 'Gurgaon' },
  { id: 7, name: 'Manipal Hospital', code: 'MANIPAL', city: 'Bangalore' },
  { id: 8, name: 'Narayana Health', code: 'NARAYANA', city: 'Bangalore' },
  { id: 9, name: 'Columbia Asia', code: 'COLUMBIA', city: 'Pune' },
  { id: 10, name: 'Cloudnine Hospital', code: 'CLOUDNINE', city: 'Chennai' },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex">
      {/* Left Side - Branding & Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 p-12 flex-col justify-between text-white"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl">
            <Heart className="h-8 w-8 text-orange-500" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">WithCaring</h1>
            <p className="text-orange-100 text-sm">Healthcare Management Platform</p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Join India's Leading<br />
              Hospital Management Platform
            </h2>
            <p className="text-xl text-orange-100">
              Manage appointments, patients, and operations seamlessly
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-orange-100 text-sm">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24×7</div>
              <div className="text-orange-100 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-orange-100 text-sm">Secure & Private</div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">100% Secure & Compliant</div>
                <div className="text-sm text-orange-100">HIPAA compliant data protection</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Real-time Updates</div>
                <div className="text-sm text-orange-100">Instant appointment notifications</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Multi-user Access</div>
                <div className="text-sm text-orange-100">Role-based permissions for your team</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-orange-100 text-sm">
          © 2025 WithCaring. Trusted by leading hospitals across India.
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="bg-orange-500 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WithCaring</h1>
              <p className="text-gray-600 text-sm">Healthcare Platform</p>
            </div>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
                <p className="text-gray-600">Sign in to access your hospital dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Hospital Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Hospital
                  </label>
                  <div className="relative">
                    <Hospital className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={selectedHospital}
                      onChange={(e) => setSelectedHospital(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Choose your hospital</option>
                      {hospitals.map((hospital) => (
                        <option key={hospital.id} value={hospital.code}>
                          {hospital.name} - {hospital.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@hospital.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Sign In
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">New to WithCaring?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <Link href="/landing">
                <Button
                  variant="outline"
                  className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-6 text-lg font-semibold rounded-lg transition-all"
                >
                  Register Your Hospital
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@withcaring.com" className="text-orange-500 font-medium hover:underline">
              support@withcaring.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
