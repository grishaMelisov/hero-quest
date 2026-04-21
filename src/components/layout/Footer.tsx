import type { FC, SVGProps } from 'react';

import LogoIcon from '@/assets/icons/logo.svg?react';
import AppstoreIcon from '@/assets/icons/appstore.svg?react';
import GooglePlayIcon from '@/assets/icons/googleplay.svg?react';
import AndroidTvIcon from '@/assets/icons/androidtv.svg?react';
import WindowsIcon from '@/assets/icons/windows.svg?react';
import MacOsIcon from '@/assets/icons/macos.svg?react';
import LinuxIcon from '@/assets/icons/linux.svg?react';
import SbpIcon from '@/assets/icons/sbp.svg?react';
import SberpayIcon from '@/assets/icons/sberpay.svg?react';
import TpayIcon from '@/assets/icons/tpay.svg?react';
import CreditCardIcon from '@/assets/icons/credit-card-outline.svg?react';
import TetherIcon from '@/assets/icons/tether.svg?react';
import TelegramIcon from '@/assets/icons/telegram.svg?react';

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

const navLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Блог', href: '#blog' },
  { label: 'Роутеры', href: '#routers' },
  { label: 'Партнерам', href: '#partners' },
  { label: 'Аккаунт', href: '/account' },
];

const downloadLinks: { label: string; Icon: SvgIcon }[] = [
  { label: 'iOS', Icon: AppstoreIcon },
  { label: 'Android', Icon: GooglePlayIcon },
  { label: 'Android TV', Icon: AndroidTvIcon },
  { label: 'Windows', Icon: WindowsIcon },
  { label: 'Mac Os', Icon: MacOsIcon },
  { label: 'Linux', Icon: LinuxIcon },
];

const paymentLinks: { label: string; Icon: SvgIcon }[] = [
  { label: 'СБП', Icon: SbpIcon },
  { label: 'Sberpay', Icon: SberpayIcon },
  { label: 'Tinkoff Pay', Icon: TpayIcon },
  { label: 'Банковская карта', Icon: CreditCardIcon },
  { label: 'Криптовалюта', Icon: TetherIcon },
];

export default function Footer() {
  return (
    <footer className='bg-bg-card rounded-t-md border-2 border-b-0 border-border w-full'>
      {/* Колонки */}
      <div className='grid grid-cols-4 gap-8 px-12 pt-10 pb-8'>
        {/* Колонка 1: Навигация */}
        <div className='flex flex-col gap-4'>
          <a href='/' className='flex items-center gap-2 mb-2'>
            <LogoIcon className='h-6 w-auto text-text-primary' />
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-footer-link text-text-secondary hover:text-text-primary transition-colors'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Колонка 2: Скачать */}
        <div className='flex flex-col gap-4'>
          <p className='text-footer-heading text-text-primary mb-2'>СКАЧАТЬ</p>
          {downloadLinks.map(({ label, Icon }) => (
            <a
              key={label}
              href='#download'
              className='flex items-center gap-3 text-footer-link text-text-secondary hover:text-text-primary transition-colors'
            >
              <Icon className='h-5 w-5 shrink-0 text-text-primary' />
              {label}
            </a>
          ))}
        </div>

        {/* Колонка 3: Способы оплаты */}
        <div className='flex flex-col gap-4'>
          <p className='text-footer-heading text-text-primary mb-2'>
            СПОСОБЫ ОПЛАТЫ
          </p>
          {paymentLinks.map(({ label, Icon }) => (
            <a
              key={label}
              href='#payment'
              className='flex items-center gap-3 text-footer-link text-text-secondary hover:text-text-primary transition-colors'
            >
              <Icon className='h-5 w-5 shrink-0 text-text-primary' />
              {label}
            </a>
          ))}
        </div>

        {/* Колонка 4: Поддержка */}
        <div className='flex flex-col gap-4'>
          <p className='text-footer-heading text-text-primary mb-2'>
            ПОДДЕРЖКА 24/7
          </p>
          <a
            href='#telegram'
            className='flex items-center gap-3 text-footer-link text-text-primary bg-brand hover:bg-brand-hover px-4 py-2 rounded-full transition-colors w-fit'
          >
            <TelegramIcon className='h-5 w-5 shrink-0 text-text-primary' />
            Telegram
          </a>
          <a
            href='#offer'
            className='text-footer-link text-text-secondary hover:text-text-primary transition-colors'
          >
            Публичная оферта
          </a>
          <a
            href='#terms'
            className='text-footer-link text-text-secondary hover:text-text-primary transition-colors'
          >
            Пользовательское соглашение
          </a>
        </div>
      </div>

      {/* Дивайдер */}
      <hr className='border-0 border-t-2 border-border' />

      {/* Копирайт */}
      <div className='text-center px-12 py-6'>
        <p className='text-footer-link text-text-muted'>
          © 2025 Wollie Development Limited. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
