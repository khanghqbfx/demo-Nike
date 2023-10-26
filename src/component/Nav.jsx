import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129] h-[29]"
          ></img>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="humburger icon"
            width={25}
            height={25}
          ></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
