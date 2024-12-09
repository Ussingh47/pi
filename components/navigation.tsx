'use client';

import { HomeIcon, LineChartIcon, WalletIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/market', label: 'Market', icon: LineChartIcon },
    { href: '/portfolio', label: 'Portfolio', icon: WalletIcon },
    { href: '/profile', label: 'Profile', icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center h-16">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full text-sm transition-colors',
              pathname === href
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            <Icon className="h-5 w-5 mb-1" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;