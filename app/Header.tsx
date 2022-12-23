import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="">
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl flex-1 text-center">
            The{" "}
            <span className="underline decoration-orange-400 decoration-6">
              DevChan
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex item-center justify-end space-x-2">
          {/* dark mode button */}
          <button className="hidden md:inline rounded-full dark:bg-slate-800 bg-slate-900 text-white px-4 font-bold py-2 hover:scale-110 ease-out duration-200 active:scale-75">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Nav links */}
      <NavLinks />
      {/* Search Box */}
      <SearchBox />
    </header>
  );
};

export default Header;
