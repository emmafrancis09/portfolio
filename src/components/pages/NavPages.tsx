import Link from "next/link";
import React from "react";

const PagesLinks = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Technologies",
    href: "/technologies",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavPages = () => {
  return (
    <div className="flex items-center justify-center mt-4 text-sm">
      <nav className="flex items-center justify-center h-12 shadow-md border border-neutral-700 rounded-lg w-[550px]">
        {
          <ul className="flex items-center justify-between px-4 ">
            <li className="mr-16">
              <Link href="/">Home</Link>
            </li>
            {PagesLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <li className="cursor-pointer h-12 px-4 flex items-center justify-center">
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
