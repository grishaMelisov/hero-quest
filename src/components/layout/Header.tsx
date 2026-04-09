import LogoIcon from '@icons/logo.svg?react';

export default function Header() {
  return (
    <header className='bg-bg-page h-20 flex items-center px-8'>
      {/* Логотип */}
      <a href='/' className='flex items-center gap-2 shrink-0'>
        <LogoIcon className='h-8 w-8 text-text-primary' />
      </a>

      {/* Навигация по центру */}
      <nav className='flex items-center gap-8 mx-auto'>
        <a
          href='#faq'
          className='text-nav text-text-primary hover:text-text-secondary transition-colors'
        >
          FAQ
        </a>
        <a
          href='#pricing'
          className='text-nav text-text-primary hover:text-text-secondary transition-colors'
        >
          Тарифы
        </a>
        <a
          href='#download'
          className='text-nav bg-brand hover:bg-brand-hover text-text-primary px-6 py-2 rounded-full transition-colors'
        >
          Скачать
        </a>
        <a
          href='#blog'
          className='text-nav text-text-primary hover:text-text-secondary transition-colors'
        >
          Блог
        </a>
      </nav>

      {/* Правая часть */}
      <div className='flex items-center gap-4 shrink-0'>
        <a
          href='/account'
          className='text-nav text-text-primary border border-border px-6 py-2 rounded-lg hover:border-border-active transition-colors'
        >
          Аккаунт
        </a>
        <button className='text-nav text-text-secondary hover:text-text-primary transition-colors'>
          РУ
        </button>
      </div>
    </header>
  );
}
