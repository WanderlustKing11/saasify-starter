import { BrandLogo } from '@/components/BrandsLogo';
import Link from 'next/link';

export function NavBar() {
  return (
    <header>
      <nav className='flex items-center gap-10 container font-semibold'>
        <Link href='/' className='mr-auto'>
          <BrandLogo />
        </Link>
      </nav>
    </header>
  );
}
