"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import VaaniLogo from "../assets/vaanilogo.png";

import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import ButtonDialog from "./Button2";
import Image from "next/image";
import IIScLogo from "../assets/IIScLogo.png";
import ArtparkLogo from "../assets/ARTPARK.png";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function Logo1() {
  return (
    <>
      <div className={"flex gap-6 bg-slate-60"}>
        <Link href={"https://www.iisc.ac.in/"}>
          <Image className="w-12 h-12 " src={IIScLogo} alt="IISc Logo" />
        </Link>
        <Link href={"https://artpark.in/language-data-ai"}>
          <Image
            className={"h-auto w-64"}
            src={ArtparkLogo}
            alt="Artpark Logo"
          />
        </Link>
      </div>
    </>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none text-white"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-fintech glass-card p-4 text-lg tracking-tight text-white shadow-fintech"
          >
            <MobileNavLink href="#Home">Home</MobileNavLink>
            <MobileNavLink href="#About">About</MobileNavLink>
            <MobileNavLink href="#Data">Data</MobileNavLink>
            <MobileNavLink href="#partners">Partners</MobileNavLink>
            <MobileNavLink href="#Team">Team</MobileNavLink>
            <MobileNavLink href="#Media">Media</MobileNavLink>
            <MobileNavLink href="/case-studies">Case Studies</MobileNavLink>
            <hr className="m-2 border-white/20" />
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  const toggleLeaderboard = () => {
    setLeaderboardOpen(!leaderboardOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    if (leaderboardOpen) {
      setLeaderboardOpen(false);
    }
  };

  return (
    <header className="navbar">
      <Container>
        <nav className="flex justify-between items-center h-16">
          {/* Left side - Logo + Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="Home">
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center rounded-full">
                  <Link href="/">
                    <Image
                      src={VaaniLogo}
                      width={100}
                      height={100}
                      alt="Vaani Logo"
                      className="transition-transform hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              <NavLink href="#Home" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Home</NavLink>
              <NavLink href="#About" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">About</NavLink>
              <NavLink href="#Data" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Data</NavLink>
              <NavLink href="#Team" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Team</NavLink>
              <NavLink href="#Partners" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Partners</NavLink>
              <NavLink href="#Media" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Media</NavLink>
              <NavLink href="/case-studies" className="text-white hover:text-fintech-light transition-colors text-sm font-medium">Case Studies</NavLink>
            </div>
          </div>

          {/* Right side - Primary CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <div className="flex gap-4 items-center">
                <Link href={"https://www.iisc.ac.in/"} className="transition-transform hover:scale-105">
                  <Image className="w-8 h-8" src={IIScLogo} alt="IISc Logo" />
                </Link>
                <Link href={"https://artpark.in/language-data-ai"} className="transition-transform hover:scale-105">
                  <Image
                    className={"h-auto w-32"}
                    src={ArtparkLogo}
                    alt="Artpark Logo"
                  />
                </Link>
              </div>
            </div>
            
            <button className="cta-primary">
              View Dashboard
            </button>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
