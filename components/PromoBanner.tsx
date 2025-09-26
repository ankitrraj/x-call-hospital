"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Clock, Shield, Zap } from 'lucide-react';

export function PromoBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-none shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          {/* Left side - Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              XCall और भी बेहतर बनाने के लिए
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              API-Based Patient Management सिस्टम अपडेट करें और पेशेंट कॉल्स मिस न करें
            </p>
            
            <div className="flex items-center space-x-8 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Automated SMS</span>
                <span className="text-xs text-gray-500">Management</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Real-time</span>
                <span className="text-xs text-gray-500">Updates</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Secure Data</span>
                <span className="text-xs text-gray-500">Protection</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Fast API</span>
                <span className="text-xs text-gray-500">Response</span>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA */}
          <div className="flex-shrink-0 ml-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              Upgrade Now!
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
