'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function WelcomeHeader() {
  return (
    <Card className="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Hello! Geetu563</h1>
          <p className="text-sm text-gray-300 mt-1">Invitation code: QqlazjlYqDgo</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-blue-600 text-white">VIP</Badge>
          <div className="relative w-12 h-12">
            <Image
              src="/ethereum-logo.png"
              alt="ETH"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}