import LogoIcon from '@icons/logo.svg?react';
import ArrowIcon from '@icons/arrow.svg?react';

export default function Header() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return hash === href;
    }

    return pathname === href;
  };

  const navItemClass = (href: string) =>
    `text-nav h-11 w-42.5 rounded-full transition-colors flex items-center justify-center border ${
      isActive(href)
        ? 'border-border text-text-primary'
        : 'border-transparent text-text-primary hover:text-text-secondary'
    }`;

  return (
    <header className='bg-bg-page h-20 flex justify-between items-center gap-4 w-full'>
      {/* Левая часть */}
      <div className='flex items-center gap-4'>
        <a href='/' className='flex w-29.5 shrink-0 items-center'>
          <LogoIcon className='h-11 w-full text-text-primary' />
        </a>
        <a href='#faq' className={navItemClass('#faq')}>
          FAQ
        </a>
        <a href='#pricing' className={navItemClass('#pricing')}>
          Тарифы
        </a>
      </div>

      {/* Центр */}
      <div className='shrink-0'>
        <a
          href='#download'
          className='text-nav bg-brand hover:bg-brand-hover text-text-primary h-11 w-44 rounded-full transition-colors flex items-center justify-center'
        >
          Скачать
        </a>
      </div>

      {/* Правая часть */}
      <div className='flex items-center justify-end gap-4'>
        <a href='#blog' className={navItemClass('#blog')}>
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
    </header>
  );
}
