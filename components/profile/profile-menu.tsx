'use client';

import { Card } from '@/components/ui/card';
import { 
  WalletIcon, 
  UserIcon, 
  Settings2Icon, 
  CreditCardIcon,
  HistoryIcon,
  UsersIcon,
  SendIcon,
  UserPlusIcon,
  HeadphonesIcon,
  CogIcon
} from 'lucide-react';

export default function ProfileMenu() {
  const menuItems = [
    {
      title: 'Account',
      items: [
        { icon: WalletIcon, label: 'My assets', color: 'bg-red-500' },
        { icon: UserIcon, label: 'Personal data', color: 'bg-yellow-500' },
        { icon: CreditCardIcon, label: 'Recharge management', color: 'bg-orange-400' },
        { icon: WalletIcon, label: 'Withdrawal management', color: 'bg-cyan-400' },
      ]
    },
    {
      title: 'Activities',
      items: [
        { icon: HistoryIcon, label: 'Fund log', color: 'bg-purple-400' },
        { icon: UsersIcon, label: 'My team', color: 'bg-red-400' },
        { icon: SendIcon, label: 'Transfer money', color: 'bg-pink-400' },
        { icon: UserPlusIcon, label: 'Invite friends', color: 'bg-violet-400' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HeadphonesIcon, label: 'Customer service', color: 'bg-cyan-500' },
        { icon: CogIcon, label: 'Set up', color: 'bg-green-400' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {menuItems.map((section, index) => (
        <Card key={index} className="p-4">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="grid grid-cols-4 gap-4">
            {section.items.map((item, itemIndex) => (
              <button key={itemIndex} className="flex flex-col items-center space-y-2">
                <div className={`p-2 rounded-lg ${item.color}`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-center">{item.label}</span>
              </button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}