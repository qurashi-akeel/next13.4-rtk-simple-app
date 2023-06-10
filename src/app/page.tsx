'use client';

import { Login } from '@/components';
import { useAppSelector } from '@/redux/store';

export default function Home() {
  const user = useAppSelector(({ authReducer }) => authReducer.value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800">
      {user.isAuth && (
        <h2 className="my-10 text-white text-2xl">
          <span className="hidden md:inline-block">Logged in as: </span>{' '}
          <span>{user.username} </span>
          {user.isAdmin && <span>- [Admin]</span>}
        </h2>
      )}
      <Login />
    </main>
  );
}
