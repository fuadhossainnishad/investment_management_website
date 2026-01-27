import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F6FA] border-b border-gray-400/20 px-[20%]">
      <div className="">
        <div className="flex h-19 items-center justify-between py-4">
          {/* Logo and Navigation */}
            <Link href='/' >
              <Logo />
            </Link>

            {/* Desktop Navigation
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium leading-5 text-neutral-text transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </a>
              ))}
            </nav> */}
 

          {/* Action Buttons */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link href='/signIn' className="hidden text-[15px] font-medium leading-5 text-[#1B1E28] transition-colors hover:text-brand-blue md:block">
              Log in
            </Link>
            <Link href='/signUp' className="bg-[#1B3A99] shadow-2xl flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] font-medium leading-5 text-[#F5F6FA] transition-transform hover:scale-105">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
