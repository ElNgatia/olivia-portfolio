import React from "react";
import { useState } from "react";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeMenu = () => {
    setIsNavOpen(false);
  };
  return (
    <header className="bg-orange bg-opacity-15 fixed md:fixed top-0 w-full font-droidserif">
      <div className=" flex items-center justify-between py-6 mx-4">
      <a
          className="mb-4 md:mb-0 ml-3 scale-150 bg-white rounded-lg p-1 hover:shadow-lg"
          href="/"
        >
          <img src="/12thstudiologo.webp" alt="Olivia" className="h-12 w-12 object-cover scale-150" />
        </a>
        <nav>
          <section className="mobile-menu flex md:hidden ">
            <div
              className="HAMBURGER-ICON space-y-2 mr-8"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-orange"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-orange"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-orange"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="yellow"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6 h-screen">
                <a
                  href="/about"
                  className="mr-5 hover:text-orange"
                  onClick={closeMenu}
                >
                  ABOUT
                </a>
                <a
                  href="/services"
                  className="mr-5 hover:text-orange"
                  onClick={closeMenu}
                >
                  SERVICES
                </a>

                <a
                  href="/contact"
                  className="mr-5 hover:text-orange"
                  onClick={closeMenu}
                >
                  CONTACT ME
                </a>
                <a
                  href="/mywork"
                  className="mr-5 hover:text-orange"
                  onClick={closeMenu}
                >
                  PORTFOLIO
                </a>
              </div>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 md:flex">
            <li>
              <a href="/about" className="mr-5 text-orange">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/services" className="mr-5 text-orange">
                SERVICES
              </a>
            </li>

            <li>
              <a href="/contact" className="mr-5 text-orange">
                CONTACT ME
              </a>
            </li>
            <li>
              <a href="/mywork" className="mr-5 text-orange">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: orange;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
      </div>
    </header>
  );
}
