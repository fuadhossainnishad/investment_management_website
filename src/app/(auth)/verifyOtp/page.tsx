'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, KeyboardEvent } from "react";

export default function VerifyEmail() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter()

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Only process if it's 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      console.log("OTP submitted:", code);
      // Handle OTP verification logic here
    }
    router.push('/roleSelection')
  };

  const handleResend = () => {
    console.log("Resend code clicked");
    // Handle resend logic here
  };

  return (
    <div className="min-h-screen w-full flex items-center bg-[#F5F6FA] overflow-hidden">
      {/* Left Column - Form */}
      <div className="flex-1 flex flex-col items-center gap-10 ">
        {/* Logo */}
        <div className="flex items-center gap-1.5 w-1/2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.739556 7.3578C-1.44465 8.045 -1.7643 9.1893 -1.83598 9.67555C-3.10583 7.69186 -1.71596 6.20308 -0.862291 5.70664C-2.75891 5.2046 -2.25686 2.78361 -1.85523 3.28569C-1.4536 3.78778 -0.248677 4.26744 0.275684 4.26744C0.800045 4.26744 1.72604 4.11125 1.72604 3.28569C1.72604 1.62339 -2.25686 2.18091 -2.25686 -0.340249C-2.25686 -1.80401 -0.903867 -2.63734 0.0745525 -2.74076V-3.05193C0.0745525 -3.3095 0.283359 -3.51831 0.540936 -3.51831C0.798512 -3.51831 1.00732 -3.3095 1.00732 -3.05193V-2.74076C2.94411 -2.24987 3.18763 -1.11772 3.18763 -0.340249C3.18763 0.437218 2.00098 -1.55983 0.573139 -1.55983C-0.0828965 -1.55983 -0.642456 -1.30333 -0.642456 -0.440712C-0.642456 0.732306 3.31029 0.802839 3.31029 3.28569C3.31029 5.18232 0.14181 6.4988 -0.739556 7.3578Z"
              fill="#0B33B1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2866 8.50896C19.7281 8.50912 21.4433 9.59039 21.4433 11.5353C21.4431 13.4801 19.7956 14.4602 18.8346 14.8441C17.8746 15.2276 15.9739 15.6295 15.9696 15.7797C15.9696 15.9293 16.7364 16.0421 16.7382 16.1917C16.7382 16.3415 16.5022 17.1676 15.6196 17.1676C14.9137 17.1674 14.581 16.1847 14.5029 15.6934C13.044 17.5359 11.0985 17.0576 11.0984 18.4025C11.0987 19.4785 13.0324 20.5824 13.999 21H4.27247C5.17331 20.9996 7.31545 19.6552 7.31571 18.4025C7.31559 17.1497 5.40682 17.0757 3.74978 16.2282C2.09266 15.3806 0.488974 13.1694 -0.3576 12.2297C-1.03492 11.478 -2.46773 10.6315 -3.09961 10.3022C-2.4644 10.2322 -0.906345 10.1945 0.243915 10.6053C1.68178 11.119 2.62917 11.6329 3.56492 11.6329C4.29548 11.6329 5.33143 11.134 5.96816 10.61H12.521C13.8251 11.792 14.4203 11.0031 15.2414 10.1737C16.1486 9.25738 16.845 8.50896 18.2866 8.50896ZM19.0861 10.2403C17.1981 8.86921 15.5452 12.43 15.249 14.4594C16.3799 14.054 21.9367 12.3114 19.0861 10.2403Z"
              fill="#0B33B1"
            />
            <path
              d="M9.23005 6.04565C9.95952 6.04578 10.236 6.81304 10.236 7.31062C10.2359 7.76676 10.0124 8.15677 9.8813 8.38603L9.88036 8.3879C10.4134 8.3879 10.4646 8.38821 11.867 9.93439H6.57249C7.06865 9.28349 7.88894 8.38815 8.58537 8.3879C8.46936 8.26149 8.28985 7.88857 8.28977 7.35754C8.2898 6.82624 8.50044 6.04565 9.23005 6.04565Z"
              fill="#0B33B1"
            />
          </svg>
          <div className="font-sen text-[21px] font-bold leading-none tracking-[-0.84px] text-[#0B33B1]">
            TermSheetGenie
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-1/2">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="font-roboto text-[32px] font-bold text-black">
              Confirm your email
            </h1>
            <p className="font-roboto text-base font-normal text-black">
              Enter the code we send you to your email
            </p>
          </div>

          {/* OTP Input Boxes */}
          <div className="flex items-start justify-center gap-3 ">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-8 h-8 flex items-center justify-center text-center border border-[#CCC] rounded-[10px] font-roboto text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-[#0B33B1] focus:border-transparent transition-all"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Resend Link */}
          <div className="self-center font-roboto text-xs font-semibold text-[#0C2A92]">
            Not getting the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              className="underline hover:no-underline"
            >
              Send again
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={otp.join("").length !== 6}
            className="w-full py-3 px-6 rounded-4xl border border-[#2648B5] font-roboto text-sm font-medium text-[#F5F6FA] transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(92deg, #1B3A99 0%, #2D60FF 40.87%, #1B3A99 100%)",
              boxShadow:
                "0px 95px 27px 0px rgba(10, 24, 66, 0.00), 0px 61px 24px 0px rgba(10, 24, 66, 0.01), 0px 34px 21px 0px rgba(10, 24, 66, 0.05), 0px 15px 15px 0px rgba(10, 24, 66, 0.09), 0px 4px 8px 0px rgba(10, 24, 66, 0.10)",
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center rounded-l-[48px] overflow-hidden">
        <Image
          src="/images/verifyOtp_page.png"
          alt="Modern skyscrapers view from below"
          className="w-full h-screen object-cover"
          height={100}
          width={100}
          unoptimized
        />
      </div>
    </div>
  );
}
