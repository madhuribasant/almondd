import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="px-3 flex justify-between items-center font-light ">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678373239/almondd/logo-white_kseg1m.png"
            blurDataURL="https://res.cloudinary.com/dzwx9lrsh/image/upload/v1678373239/almondd/logo-white_kseg1m.png"
            placeholder="blur"
            width="120"
            height="10"
            alt="logo"
          />
        </Link>

        <ul className=" gap-4 2xl:text-lg text-sm md:flex hidden">
          <li>
            <Link href="/about" className="py-3 px-6">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-3 px-6">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/discuss" className="outline_btn">
              Discuss Project
            </Link>
          </li>
        </ul>

        <div className="md:hidden visible">
          <Menu as="div" className="relative inline-block ">
            <div>
              <Menu.Button className=" justify-center rounded-md bg-black bg-opacity-20 p-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <GiHamburgerMenu className="text-xl"/>
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-black/30 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href="/about"
                        className={`${
                          active ? "bg-black/50 text-white" : "text-white/80"
                        } group flex w-full items-center rounded-md px-2 py-2  text-lg`}
                      >
                       
                        About Us
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href="/contact"
                        className={`${
                          active ? "bg-black/50 text-white" : "text-white/80"
                        } group flex w-full items-center rounded-md px-2 py-2  text-lg`}
                      >
                       
                        Contact Us
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href="/discuss"
                        className={`${
                          active ? "bg-black/50 text-white" : "text-white/80"
                        } group flex w-full items-center rounded-md px-2 py-2  text-lg`}
                      >
                        Discuss Project
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
