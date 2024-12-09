'use client';

import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createChart } from 'lightweight-charts';

export default function PriceChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const timeframes = ['1H', '24H', '7D', '30D', '1Y'];

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: 'transparent' },
          textColor: '#D9D9D9',
        },
        grid: {
          vertLines: { color: '#2B2B43' },
          horzLines: { color: '#2B2B43' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries();
      // Add sample data
      candlestickSeries.setData([
        { time: '2024-01-01', open: 0, high: 0, low: 0, close: 0 },
      ]);

      return () => {
        chart.remove();
      };
    }
  }, []);

  return (
    <Card className="p-4">
      <div className="flex justify-end space-x-2 mb-4">
        {timeframes.map((timeframe) => (
          <Button
            key={timeframe}
            variant="outline"
            size="sm"
          >
            {timeframe}
          </Button>
        ))}
      </div>
      <div ref={chartContainerRef} />
    </Card>
  );
}