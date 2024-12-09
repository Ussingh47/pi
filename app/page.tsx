'use client';

import WelcomeHeader from '@/components/welcome-header';
import AssetBalance from '@/components/asset-balance';
import VipCard from '@/components/vip-card';

export default function Home() {
  return (
    <div className="container p-4 pb-20 space-y-4">
      <WelcomeHeader />
      <AssetBalance />
      <VipCard />
    </div>
  );
}