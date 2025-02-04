import Link from "next/link";
import React from "react";

const PagesLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Technologies",
    href: "/technologies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavPages = () => {
  return (
    <div className="flex items-center justify-center">
      <nav>
        {
          <ul className="flex items-center space-x-8 py-[8px] shadow-sm hover:shadow-blue-900 mt-4 border border-neutral-700 px-6 rounded-lg transition-all text-sm">
            {PagesLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <li className="cursor-pointer active:opacity-45">
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
        }
      </nav>
    </div>
  );
};

export default NavPages;
