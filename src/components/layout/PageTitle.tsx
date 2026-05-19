interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className='w-full py-6 flex items-center justify-center'>
      <h1 className='text-page-title text-text-primary'>{title}</h1>
    </div>
  );
}
