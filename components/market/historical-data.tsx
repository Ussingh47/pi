'use client';

import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function HistoricalData() {
  const historicalData = [
    {
      date: '2024-02-29',
      open: 0.00,
      high: 0.00,
      low: 0.00,
      close: 0.00,
      volume: '0',
    },
    // Add more historical data here
  ];

  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Open</TableHead>
            <TableHead>High</TableHead>
            <TableHead>Low</TableHead>
            <TableHead>Close</TableHead>
            <TableHead>Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historicalData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>${row.open.toFixed(4)}</TableCell>
              <TableCell>${row.high.toFixed(4)}</TableCell>
              <TableCell>${row.low.toFixed(4)}</TableCell>
              <TableCell>${row.close.toFixed(4)}</TableCell>
              <TableCell>{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}