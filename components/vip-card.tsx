'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';

export default function VipCard() {
  return (
    <Card className="p-4 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="flex items-center mb-2">
        <Flame className="text-white mr-2" />
        <h2 className="text-lg font-semibold text-white">Popular recommendation</h2>
      </div>
      
      <div className="space-y-3">
        {[
          { level: 'VIP', online: 9063, income: '1.5%', range: '13-1000000E' },
          { level: 'VIP1', online: 4128, income: '3.2%', range: '27-1000000E' },
          { level: 'VIP2', online: 7071, income: '3.4%', range: '40-1000000E' },
        ].map((item, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-white font-semibold">{item.level}</span>
                <span className="text-white/80 text-sm ml-4">online:{item.online}</span>
              </div>
              <Button size="sm" variant="secondary" className="bg-pink-500 text-white hover:bg-pink-600">
                start work
              </Button>
            </div>
            <div className="mt-2 text-sm text-white/80">
              <span className="mr-4">Income: {item.income}</span>
              <span>{item.range}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}