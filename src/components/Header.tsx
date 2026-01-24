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
    <header className="sticky top-0 z-50 bg-neutral-bg">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex h-[76px] items-center justify-between py-4">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8 md:gap-12">
            <Link href='/' to="/">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
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
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 md:gap-8">
            <button className="hidden text-[15px] font-medium leading-5 text-neutral-text transition-colors hover:text-brand-blue md:block">
              Log in
            </button>
            <button className="gradient-brand shadow-brand flex items-center justify-center rounded-[32px] border border-brand-blue-border px-6 py-3 text-[15px] font-medium leading-5 text-neutral-bg transition-transform hover:scale-105">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
