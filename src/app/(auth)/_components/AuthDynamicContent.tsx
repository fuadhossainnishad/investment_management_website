// components/AuthDynamicContent.tsx
'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const images: Record<string, string> = {
  signin: "/images/signup_page.jpg",
  signup: "/images/signup_page.jpg",
  verifyOtp: "/images/signup_page.jpg",
  default: "/images/signup_page.jpg",
};

export default function AuthDynamicContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segment = pathname.split("/").pop() || "default";

  const bgImage = images[segment] || images.default;
  const isVerifyOtp = segment === "verifyOtp";
  const isSignIn = segment === "signIn";

  const bottomText = isSignIn
    ? "Don't have an account?"
    : "Already have an account?";
  const linkText = isSignIn ? "Sign up" : "Sign in";
  const linkHref = isSignIn ? "/signUp" : "/signIn";

  return (
    < >
      {/* Dynamic Background - Left Side */}

      {/* Form Side - Right Side */}
      <section className="w-full md:w-1/2 h-screen overflow-y-auto scrollbar-hide bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <header className="text-center mb-10">
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </header>

          {/* Children (the actual form) */}
          {children}

          {/* Social + Toggle - Hide on OTP */}
          {!isVerifyOtp && (
            <>
              <div className="my-8 border-t text-center relative">
                <span className="bg-white px-4 text-sm text-gray-600 -mt-3 inline-block">
                  Or
                </span>
              </div>

              <div className="space-y-4">
                <button className="flex items-center justify-center gap-4 w-full border rounded-lg px-6 py-3 hover:bg-gray-50">
                  <Image src="/images/google.png" alt="Google" width={24} height={24} />
                  <span>Sign in with Google</span>
                </button>
                <button className="flex items-center justify-center gap-4 w-full border rounded-lg px-6 py-3 hover:bg-gray-50">
                  <Image src="/images/apple.png" alt="Apple" width={24} height={24} />
                  <span>Sign in with Apple</span>
                </button>
              </div>

              <div className="mt-10 text-center text-sm">
                <span className="text-gray-600">{bottomText} </span>
                <Link href={linkHref} className="text-blue-600 font-medium hover:underline">
                  {linkText}
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="hidden md:block md:w-1/2 h-screen relative overflow-hidden">
        <Image
          src={bgImage}
          alt="Auth background"
          fill
          className="object-cover"
          priority
        />
      </section>

    </>
  );
}