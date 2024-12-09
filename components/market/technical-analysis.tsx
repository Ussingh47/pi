'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function TechnicalAnalysis() {
  const indicators = [
    { name: 'RSI', value: 45, interpretation: 'Neutral' },
    { name: 'MACD', value: -0.002, interpretation: 'Sell' },
    { name: 'Moving Average (20)', value: 0.15, interpretation: 'Buy' },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Technical Indicators</h3>
      <div className="space-y-4">
        {indicators.map((indicator, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span>{indicator.name}</span>
              <span className="text-muted-foreground">{indicator.interpretation}</span>
            </div>
            <Progress value={Math.abs(indicator.value) * 100} />
          </div>
        ))}
      </div>
    </Card>
  );
}