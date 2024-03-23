'use client';

import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';
import { MENU } from '@/components/dashboard-layout/lib/menu.data';
import { LogoutButton } from '@/components/dashboard-layout/ui/LogoutButtton';
import { COLORS } from '@/constants/color.constants';
import { MenuItem } from './MenuItem';

export function Sidebar() {
  return (
    <aside className='border-r-border bg-sidebar flex h-full flex-col justify-between border-r'>
      <div>
        <Link
          href='/'
          className='p-layout border-b-border flex items-center gap-2.5 border-b'
        >
          <GanttChartSquare
            color={COLORS.primary}
            size={38}
          />
          <span className='relative text-2xl font-bold'>Planner</span>
        </Link>
        <div className='relative p-3 pt-3'>
          <LogoutButton />

          {MENU.map(item => (
            <MenuItem
              item={item}
              key={item.link}
            />
          ))}
        </div>
      </div>
      <footer className='p-layout text-center text-xs font-normal opacity-40'>
        2024 &copy; With love from Zim
        <br /> All rights reserved.
      </footer>
    </aside>
  );
}
