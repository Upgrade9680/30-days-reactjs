import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      <footer className="text-center p-4 text-sm text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} React Starter
      </footer>
    </div>
  );
}
