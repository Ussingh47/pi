'use client';

import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  color: string;
}

interface MenuListProps {
  items: MenuItem[];
}

export default function MenuList({ items }: MenuListProps) {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <button key={index} className="flex flex-col items-center space-y-2">
            <div className={`p-2 rounded-lg ${item.color}`}>
              <item.icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}