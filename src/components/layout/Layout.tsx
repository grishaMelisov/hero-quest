import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import PageTitle from './PageTitle';

const PAGE_TITLES: Record<string, string> = {
  '/account': 'Аккаунт',
};

export default function Layout() {
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname];

  return (
    <div className='explore-shell overflow-hidden flex flex-col items-center justify-center min-h-screen'>
      <Header />
      {title && <PageTitle title={title} />}
      <Outlet />
      <Footer />
    </div>
  );
}
