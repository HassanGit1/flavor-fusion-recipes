import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';


export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-[#062a4d] to-green-400 shadow-lg">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-3 text-white font-semibold text-2xl">
        <Logo />
        <span className="tracking-wide">Flavour Fusion</span>
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="list-none flex gap-6">
          <li>
                <NavLink href="/meals">
                    Browse Meals
                </NavLink>
          </li>
          <li>
               <NavLink href="/community">
                   Foodies Community
                </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
