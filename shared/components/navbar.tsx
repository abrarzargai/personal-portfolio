import { navlink, user } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props) => {
  const router = useRouter();
  return (
    <li
      className={`
      px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
      ${router.asPath === href ? 'border-b-2 md:border-none' : ''} 
      `}>
      <Link href={href}>
        <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
          {title}
        </p>
        <Image
          width={50}
          height={50}
          src="/images/vectors/nav_active.svg"
          alt="nav-active"
          className={`
            hidden md:block md:opacity-0
            ${router.asPath === href && 'md:opacity-100 md:w-100'}
            `}
        />
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const addShadowtoNav = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);

  return (
    <div
      className={` mx-auto bg-blue w-full fixed z-30
      ${isScreenScrolled && 'shadow-2xl'}
      `}>
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between">
          <div className="text-white font-bold text-xl">
            <Link href="/">{user.name}</Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navlink.navlinks.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.title} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
