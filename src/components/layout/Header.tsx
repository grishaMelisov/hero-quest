import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoIcon from '@icons/logo.svg?react';
import ArrowIcon from '@icons/arrow.svg?react';
import BurgerIcon from '@icons/burger.svg?react';

const navLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/pricing', label: 'Тарифы' },
  { href: '/blog', label: 'Блог' },
  { href: '/account', label: 'Аккаунт' },
  { href: '/download', label: 'Скачать' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItemClass = (href: string) =>
    `text-nav h-11 w-42.5 rounded-full transition-colors flex items-center justify-center border ${
      pathname === href
        ? 'border-border text-text-primary'
        : 'border-transparent text-text-primary hover:text-text-secondary'
    }`;

  return (
    <>
      <header className='bg-bg-page h-20 flex items-center w-full'>
        <div className='relative flex xl:hidden items-center justify-between w-full'>
          <button
            onClick={() => setMenuOpen(true)}
            className='text-text-primary p-1'
            aria-label='Открыть меню'
          >
            <BurgerIcon className='h-6 w-6' />
          </button>

          <a
            href='/'
            className='absolute left-1/2 -translate-x-1/2 flex w-29.5 shrink-0 items-center'
          >
            <LogoIcon className='h-11 w-full text-text-primary' />
          </a>

          <button className='text-nav text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2'>
            РУ
            <ArrowIcon className='h-4 w-4 shrink-0' />
          </button>
        </div>

        <div className='hidden xl:flex justify-between items-center gap-4 w-full'>
          <div className='flex items-center gap-4'>
            <a href='/' className='flex w-29.5 shrink-0 items-center'>
              <LogoIcon className='h-11 w-full text-text-primary' />
            </a>
            <a href='/faq' className={navItemClass('/faq')}>
              FAQ
            </a>
            <a href='/pricing' className={navItemClass('/pricing')}>
              Тарифы
            </a>
          </div>

          <div className='shrink-0'>
            <a
              href='/download'
              className='text-nav bg-brand hover:bg-brand-hover text-text-primary h-11 w-44 rounded-full transition-colors flex items-center justify-center'
            >
              Скачать
            </a>
          </div>

          <div className='flex items-center justify-end gap-4'>
            <a href='/blog' className={navItemClass('/blog')}>
              Блог
            </a>
            <a href='/account' className={navItemClass('/account')}>
              Аккаунт
            </a>
            <button className='text-nav h-11 w-28.25 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-2'>
              РУ
              <ArrowIcon className='h-4 w-4 shrink-0' />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-bg-page flex flex-col'>
          <div className='h-20 flex items-center justify-between px-4'>
            <a
              href='/'
              className='flex w-29.5 shrink-0 items-center'
              onClick={() => setMenuOpen(false)}
            >
              <LogoIcon className='h-11 w-full text-text-primary' />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className='text-text-primary text-3xl leading-none p-1'
              aria-label='Закрыть меню'
            >
              ✕
            </button>
          </div>

          <nav className='flex flex-col items-center justify-center flex-1 gap-8'>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className='text-nav text-text-primary hover:text-text-secondary transition-colors'
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
