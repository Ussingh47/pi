'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PriceOverview from '@/components/market/price-overview';
import MarketMetrics from '@/components/market/market-metrics';
import PriceChart from '@/components/market/price-chart';
import TechnicalAnalysis from '@/components/market/technical-analysis';
import HistoricalData from '@/components/market/historical-data';

export default function MarketPage() {
  return (
    <div className="container p-4 pb-20 space-y-4">
      <PriceOverview />
      <MarketMetrics />
      
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chart" className="mt-4">
          <PriceChart />
        </TabsContent>
        
        <TabsContent value="analysis" className="mt-4">
          <TechnicalAnalysis />
        </TabsContent>
        
        <TabsContent value="history" className="mt-4">
          <HistoricalData />
        </TabsContent>
      </Tabs>
    </div>
  );
}