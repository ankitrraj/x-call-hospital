"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Hospital, ArrowRight, Shield, Clock, Users, CheckCircle, Phone, Mail, MapPin, Star, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WithCaring</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-orange-500 transition-colors">Benefits</a>
            <a href="#hospitals" className="text-gray-600 hover:text-orange-500 transition-colors">Partner Hospitals</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-orange-500">
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎉 India's #1 Hospital Management Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Hospital with{' '}
                <span className="text-orange-500">WithCaring</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join 10+ leading hospitals managing appointments, patients, and operations seamlessly. 
                Trusted by healthcare professionals across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/login">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg rounded-xl">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <span className="text-sm text-gray-600 ml-2">4.9/5 from 500+ reviews</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Hospital className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Today's Appointments</div>
                      <div className="text-2xl font-bold text-gray-900">47 Patients</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Completed</span>
                      <span className="text-green-600 font-bold">32</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">In Progress</span>
                      <span className="text-blue-600 font-bold">9</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Waiting</span>
                      <span className="text-orange-600 font-bold">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '10+', label: 'Partner Hospitals', icon: Hospital },
              { number: '24×7', label: 'Support Available', icon: Clock },
              { number: '50K+', label: 'Appointments Managed', icon: Users },
              { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 border-2 hover:border-orange-500 transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Your Hospital Needs
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for modern healthcare management
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Users,
                title: 'Patient Management',
                description: 'Complete patient records, history, and real-time updates at your fingertips'
              },
              {
                icon: Clock,
                title: 'Smart Scheduling',
                description: 'AI-powered appointment scheduling with automated reminders via SMS & WhatsApp'
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'HIPAA compliant with end-to-end encryption for all patient data'
              },
              {
                icon: Phone,
                title: 'Call Integration',
                description: 'Seamless Twilio integration for automated appointment confirmations'
              },
              {
                icon: TrendingUp,
                title: 'Analytics Dashboard',
                description: 'Real-time insights on appointments, doctors, and hospital performance'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance with instant load times and smooth transitions'
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-orange-500">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Hospitals Choose WithCaring
              </h2>
              <div className="space-y-4">
                {[
                  'Reduce appointment no-shows by 60% with automated reminders',
                  'Save 10+ hours per week on manual scheduling',
                  'Improve patient satisfaction with real-time updates',
                  'Multi-hospital support with complete data isolation',
                  'Role-based access for doctors, staff, and admins',
                  '24/7 customer support in English & Hindi',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Start Your Free Trial Today</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>14-day free trial, no credit card required</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Full access to all premium features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Dedicated onboarding support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Cancel anytime, no questions asked</span>
                </li>
              </ul>
              <Link href="/login">
                <Button className="w-full bg-white text-orange-500 hover:bg-gray-100 py-6 text-lg font-semibold">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Hospital?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join leading hospitals across India using WithCaring for seamless operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 p-2 rounded-xl">
                  <Heart className="h-5 w-5 text-white" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white">WithCaring</h3>
              </div>
              <p className="text-sm">
                India's leading hospital management platform trusted by healthcare professionals.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Features</a></li>
                <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-500">Security</a></li>
                <li><a href="#" className="hover:text-orange-500">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  support@withcaring.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 WithCaring. All rights reserved. Made with ❤️ for healthcare professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
