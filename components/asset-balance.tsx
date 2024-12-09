'use client';

import { Card } from '@/components/ui/card';

export default function AssetBalance() {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-medium">Balance</h2>
          <p className="text-3xl font-bold mt-2">₹ 74 INR</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400">ETH</h3>
            <p className="text-lg font-semibold mt-1">1.0000</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400">Revenue</h3>
            <p className="text-lg font-semibold mt-1">Level</p>
            <p className="text-sm text-blue-600">VIP</p>
          </div>
        </div>
      </div>
    </Card>
  );
}