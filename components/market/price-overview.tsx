'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { usePiPrice } from '@/hooks/use-pi-price';

export default function PriceOverview() {
  const { data, isLoading } = usePiPrice();
  const priceChange = 2.5; // Example value
  
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">Pi Network (PI)</h2>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-3xl font-bold">$0.00</span>
            <span className={`flex items-center ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {priceChange >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(priceChange)}%
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Last updated</p>
          <p className="text-sm">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </Card>
  );
}