import Link from "next/link";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { MailIcon } from "@heroicons/react/outline";
import VaaniLogo from "../assets/vaanilogo.png";
import Image from "next/image";
const Building = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-fintech-light"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
      />
    </svg>
  );
};

export function Footer() {
  return (
    <footer className="content-relative py-16">
      <Container>
        <div className="glass-card p-8 rounded-fintech max-w-4xl mx-auto mb-8">
          <div className="flex flex-col items-center">
            <div className="flex gap-2 justify-center items-center rounded-full glass-card p-3 mb-8">
              <Link href={"/"}>
                <Image
                  src={VaaniLogo}
                  width={120}
                  height={120}
                  alt="Vaani Logo"
                  className="transition-transform hover:scale-105"
                />
              </Link>
            </div>
            <nav className="text-sm" aria-label="quick links">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <NavLink href="#Home" className="text-white hover:text-fintech-light transition-colors">Home</NavLink>
                <NavLink href="#About" className="text-white hover:text-fintech-light transition-colors">About</NavLink>
                <NavLink href="#Data" className="text-white hover:text-fintech-light transition-colors">Data</NavLink>
                <NavLink href="#Team" className="text-white hover:text-fintech-light transition-colors">Team</NavLink>
                <NavLink href="#Partners" className="text-white hover:text-fintech-light transition-colors">Partners</NavLink>
                <NavLink href="#Media" className="text-white hover:text-fintech-light transition-colors">Media</NavLink>
              </div>
            </nav>
          </div>
        </div>

        <div className="glass-card p-8 rounded-fintech max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-semibold text-xl text-white mb-4">Contact Us</h2>
              <p className="text-white/80 mb-6">
                We are always open to new ideas and collaborations. <br /> Feel
                free to reach out to us.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MailIcon className="h-5 w-5 text-fintech-light" />
                <span className="text-white/90"> vaanicontact@gmail.com </span>
              </div>
              <div className="flex gap-3">
                <Building className="h-5 w-5 text-fintech-light mt-1" />
                <div className="text-white/90">
                  <span className="block">SPIRE LAB, Room No. EE C 326</span>
                  <span className="block">
                    Department of Electrical Engineering
                  </span>
                  <span className="block">
                    Indian Institute of Science Bangalore-560012
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center">
              <p className="text-sm text-white/70">
                &copy; 2024 The Project VAANI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
