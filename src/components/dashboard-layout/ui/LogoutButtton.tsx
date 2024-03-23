'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';

export function LogoutButton() {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push('/auth')
  });

  return (
    <div className='flex justify-center'>
      <button
        className='opacity-20 transition-opacity duration-300 hover:opacity-100'
        onClick={() => mutate()}
      >
        <LogOut size={28} />
      </button>
    </div>
  );
}
