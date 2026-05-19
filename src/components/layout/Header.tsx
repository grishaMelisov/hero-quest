import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import LogoIcon from '@icons/logo.svg?react';
import ArrowIcon from '@icons/arrow.svg?react';
import BurgerIcon from '@icons/burger.svg?react';

const navLinks = [
  { to: '/faq', label: 'FAQ', side: 'left' },
  { to: '/pricing', label: 'Тарифы', side: 'left' },
  { to: '/blog', label: 'Блог', side: 'right' },
  { to: '/account', label: 'Аккаунт', side: 'right' },
] as const;

const leftLinks = navLinks.filter((l) => l.side === 'left');
const rightLinks = navLinks.filter((l) => l.side === 'right');
const mobileLinks = [
  ...navLinks,
  { to: '/download', label: 'Скачать', side: 'right' } as const,
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItemClass = (to: string) =>
    clsx(
      'text-nav h-11 w-42.5 rounded-full transition-colors flex items-center justify-center border',
      pathname === to
        ? 'border-border text-text-primary'
        : 'border-transparent text-text-primary hover:text-text-secondary'
    );

  return (
    <>
      <header className='bg-bg-page h-20 flex items-center w-full'>
        <div className='relative flex xl:hidden items-center justify-between w-full'>
          <button
            onClick={() => setMenuOpen(true)}
            className='text-text-primary p-1'
            aria-label='Открыть меню'
            aria-expanded={menuOpen}
          >
            <BurgerIcon className='h-6 w-6' />
          </button>

          <Link
            to='/'
            className='absolute left-1/2 -translate-x-1/2 flex w-29.5 shrink-0 items-center'
          >
            <LogoIcon className='h-11 w-full text-text-primary' />
          </Link>

          <button
            className='text-nav text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2'
            aria-label='Выбор языка'
          >
            РУ
            <ArrowIcon className='h-4 w-4 shrink-0' />
          </button>
        </div>

        <div className='hidden xl:flex justify-between items-center gap-4 w-full'>
          <div className='flex items-center gap-4'>
            <Link to='/' className='flex w-29.5 shrink-0 items-center'>
              <LogoIcon className='h-11 w-full text-text-primary' />
            </Link>
            {leftLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={navItemClass(to)}>
                {label}
              </Link>
            ))}
          </div>

          <div className='shrink-0'>
            <Link
              to='/download'
              className='text-nav bg-brand hover:bg-brand-hover text-text-primary h-11 w-44 rounded-full transition-colors flex items-center justify-center'
            >
              Скачать
            </Link>
          </div>

          <div className='flex items-center justify-end gap-4'>
            {rightLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={navItemClass(to)}>
                {label}
              </Link>
            ))}
            <button
              className='text-nav h-11 w-28.25 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-2'
              aria-label='Выбор языка'
            >
              РУ
              <ArrowIcon className='h-4 w-4 shrink-0' />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-bg-page flex flex-col'>
          <div className='h-20 flex items-center justify-between px-4'>
            <Link
              to='/'
              className='flex w-29.5 shrink-0 items-center'
              onClick={() => setMenuOpen(false)}
            >
              <LogoIcon className='h-11 w-full text-text-primary' />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className='text-text-primary text-3xl leading-none p-1'
              aria-label='Закрыть меню'
            >
              ✕
            </button>
          </div>

          <nav className='flex flex-col items-center justify-center flex-1 gap-8'>
            {mobileLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className='text-nav text-text-primary hover:text-text-secondary transition-colors'
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
