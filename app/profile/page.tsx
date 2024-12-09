'use client';

import { Card } from '@/components/ui/card';
import ProfileHeader from '@/components/profile/profile-header';
import ProfileMenu from '@/components/profile/profile-menu';

export default function ProfilePage() {
  return (
    <div className="container p-4 pb-20 space-y-4">
      <ProfileHeader />
      <ProfileMenu />
    </div>
  );
}