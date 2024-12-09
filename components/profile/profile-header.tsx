'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src="/ethereum-logo.png"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold">Geetu563</h2>
            <Badge variant="secondary" className="bg-blue-600 text-white">VIP</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">ID: QqlazjlYqDgo</p>
        </div>
      </div>
    </Card>
  );
}