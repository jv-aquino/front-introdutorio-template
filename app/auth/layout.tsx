import { getUser } from '@/services/UserService';
import { redirect } from 'next/navigation';

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  if (user) {
    redirect('/');
  }

  return <>{children}</>;
}

export default DashboardLayout;
