'use client';

import { Card } from '@/components/ui/card';

export default function MarketMetrics() {
  const metrics = [
    { label: 'Market Cap', value: '$0.00' },
    { label: 'Volume (24h)', value: '$0.00' },
    { label: 'Circulating Supply', value: '0.00 PI' },
    { label: 'Total Supply', value: '0.00 PI' },
    { label: 'All-Time High', value: '$0.00' },
    { label: 'All-Time Low', value: '$0.00' },
  ];

  return (
    <Card className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-lg font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}