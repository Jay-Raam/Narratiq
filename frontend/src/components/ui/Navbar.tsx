"use client";

import Link from "next/link";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="image flex bg-[rgba(7,7,10,.9)] text-white p-4 max-w-[1200px] w-[300px] md:w-[500px] mx-auto rounded-full fixed bottom-12 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <div className="container flex justify-evenly items-center p-0">
            <Link href="/">
              <h1 className="text-[18px] md:text-2xl font-bold">Narratiq</h1>
            </Link>
            <div className="flex md:gap-5">
              <Link href="/books">
                <span className="block text-[12px] md:text-[16px] px-2 md:px-4 py-2 text-center hover:bg-black h-full rounded">
                  Books
                </span>
              </Link>
              <Link href="/search">
                <span className="block text-[12px] md:text-[16px] px-2 md:px-4 py-2 text-center hover:bg-black h-full rounded">
                  Search
                </span>
              </Link>
              <Link href="/contact">
                <span className="block text-[12px] md:text-[16px] px-2 md:px-4 py-2 text-center hover:bg-black h-full rounded">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
