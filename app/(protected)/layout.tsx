import { getUser } from '@/services/UserService';
import { redirect } from 'next/navigation';

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser(true);

  if (!user) {
    redirect('/auth/login');
  }

  return <>{children}</>;
}

export default DashboardLayout;
