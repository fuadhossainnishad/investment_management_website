'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberAccount, setRememberAccount] = useState(false);
  const router = useRouter()

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { name, email, password, rememberAccount });
    router.push('/verifyOtp')
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in
    console.log("Google sign-in clicked");
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign-in
    console.log("Apple sign-in clicked");
  };

  return (
    <div className="min-h-screen w-full flex items-center bg-[#F5F6FA] overflow-hidden">
      {/* Left Column - Form */}
      <div className="w-1/2 flex flex-col items-center gap-10 lg:gap-20">
        {/* Logo */}
        <div className="flex self-center items-center gap-1.5 w-1/2">
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
        <form onSubmit={handleSignUp} className="flex flex-col gap-8 w-1/2">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="font-roboto text-[32px] font-bold text-black">
              Get Started Now            </h1>

            <p className="font-roboto text-base font-normal text-black">
              Sign up today to make smarter deals!

            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-roboto text-sm font-normal text-black">
                Name
              </label>
              <input
                type="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-8 px-2.5 py-2.5 border border-[#CCC] rounded-[10px] font-roboto text-[10px] placeholder:text-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#0B33B1] focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-roboto text-sm font-normal text-black">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 px-2.5 py-2.5 border border-[#CCC] rounded-[10px] font-roboto text-[10px] placeholder:text-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#0B33B1] focus:border-transparent"
              />
            </div>

            {/* Password Field Container */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-roboto text-sm font-normal text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-8 px-2.5 py-2.5 border border-[#CCC] rounded-[10px] font-roboto text-[10px] placeholder:text-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#0B33B1] focus:border-transparent"
                />
              </div>

              {/* Forgot Password & Remember Account */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setRememberAccount(!rememberAccount)}
                    className="w-2.5 h-2.5 border border-black rounded-xs flex items-center justify-center"
                  >
                    {rememberAccount && (
                      <div className="w-1.5 h-1.5 bg-black rounded-[1px]"></div>
                    )}
                  </button>
                  <label className="font-roboto text-[9px] font-normal text-black">
                    I agree to the terms & policy
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-4xl bg-[#1B3A99] border border-[#2648B5] font-roboto text-sm font-medium text-[#F5F6FA] transition-all hover:opacity-90"
            style={{
              boxShadow:
                "0px 95px 27px 0px rgba(10, 24, 66, 0.00), 0px 61px 24px 0px rgba(10, 24, 66, 0.01), 0px 34px 21px 0px rgba(10, 24, 66, 0.05), 0px 15px 15px 0px rgba(10, 24, 66, 0.09), 0px 4px 8px 0px rgba(10, 24, 66, 0.10)",
            }}
          >
            Sign up          </button>

          {/* Divider */}
          <div className="relative h-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#CCC]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1 bg-[#F5F6FA]">
              <span className="font-roboto text-[9px] font-medium text-black">Or</span>
            </div>
          </div>

          {/* Social Sign-in Options */}
          <div className="flex gap-6">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex-1 py-1 px-5 flex items-center justify-center gap-2.5 border border-[#D9D9D9] rounded-[10px] hover:bg-gray-50 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.6057 17.5456 13.3577 18.0001 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="font-roboto text-xs font-medium text-black">
                Sign in with Google
              </span>
            </button>

            <button
              type="button"
              onClick={handleAppleSignIn}
              className="flex-1 py-1 px-5 flex items-center justify-center gap-2.5 border border-[#D9D9D9] rounded-[10px] hover:bg-gray-50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_740_8947)">
                  <path d="M17.4864 -9.8604e-05C16.1252 0.0917763 14.6683 0.901776 13.7664 1.9949C12.977 2.95678 12.3152 4.36865 12.5664 5.8349C12.3414 5.76553 12.137 5.75803 11.8914 5.6699C11.222 5.43178 10.457 5.1749 9.5064 5.1749C7.61828 5.1749 5.68515 6.29803 4.4664 8.1749C2.69265 10.9012 3.0489 15.6993 5.7414 19.7999C6.21578 20.5199 6.7689 21.3055 7.4514 21.9299C8.1339 22.5543 8.9589 23.0305 9.9264 23.0399C10.7533 23.0493 11.3289 22.7737 11.8464 22.5449C12.3639 22.3162 12.8458 22.1137 13.7514 22.1099C13.757 22.1099 13.7608 22.1099 13.7664 22.1099C14.6683 22.1024 15.1352 22.3012 15.6414 22.5299C16.1477 22.7587 16.7177 23.0474 17.5464 23.0399C18.5327 23.0324 19.3708 22.4924 20.0664 21.8249C20.762 21.1574 21.3339 20.338 21.8064 19.6199C22.4833 18.5887 22.7552 18.0262 23.2764 16.8749C23.3308 16.7549 23.3327 16.6162 23.2802 16.4943C23.2295 16.3724 23.1302 16.2768 23.0064 16.2299C21.3002 15.5849 20.327 14.0755 20.1864 12.4799C20.0458 10.8843 20.7208 9.24178 22.4214 8.3099C22.547 8.2424 22.6352 8.12428 22.6652 7.98553C22.6933 7.84678 22.6595 7.70053 22.5714 7.5899C21.3508 6.07303 19.6333 5.1749 17.9514 5.1749C16.8789 5.1749 16.0914 5.42803 15.4464 5.6699C15.3395 5.71115 15.2608 5.7074 15.1614 5.7449C15.8158 5.3999 16.3933 4.92178 16.8264 4.3649C17.6139 3.35428 18.2214 1.91615 17.9964 0.404901C17.9589 0.157401 17.7358 -0.0188486 17.4864 -9.8604e-05ZM16.9764 1.1399C16.9445 2.10928 16.6127 3.05803 16.0614 3.7649C15.4839 4.5074 14.5127 5.02115 13.5714 5.1749C13.5883 4.24303 13.9558 3.2774 14.5164 2.5949C15.1052 1.8824 16.0802 1.36865 16.9764 1.1399ZM9.5064 6.1349C9.9264 6.1349 10.9014 6.33553 11.5614 6.5699C12.2214 6.80428 12.917 7.0799 13.7364 7.0799C14.537 7.0799 15.1708 6.8024 15.7914 6.5699C16.412 6.3374 17.0308 6.1349 17.9514 6.1349C19.1533 6.1349 20.4527 6.75928 21.4764 7.8449C19.8377 9.00178 19.0708 10.8055 19.2264 12.5549C19.382 14.323 20.447 16.0012 22.1964 16.8749C22.1939 16.8804 22.1914 16.8858 22.1889 16.8912C21.8143 17.7071 21.5646 18.2511 21.0114 19.0949C20.552 19.7943 20.0064 20.5593 19.4064 21.1349C18.8064 21.7105 18.1708 22.0743 17.5314 22.0799C16.9145 22.0855 16.5639 21.9018 16.0314 21.6599C15.4989 21.418 14.8108 21.1405 13.7514 21.1499C12.6939 21.1555 11.9964 21.4218 11.4564 21.6599C10.9164 21.898 10.562 22.0855 9.9414 22.0799C9.28515 22.0743 8.67578 21.7555 8.0964 21.2249C7.51703 20.6943 6.9939 19.9705 6.5364 19.2749C4.0164 15.4349 3.8139 10.9237 5.2614 8.6999C6.32265 7.06678 9.0864 6.1349 9.5064 6.1349Z" fill="black" />
                  <path d="M9.5064 6.1349C9.9264 6.1349 10.9014 6.33553 11.5614 6.5699C12.2214 6.80428 12.917 7.0799 13.7364 7.0799C14.537 7.0799 15.1708 6.8024 15.7914 6.5699C16.412 6.3374 17.0308 6.1349 17.9514 6.1349C19.1533 6.1349 20.4527 6.75928 21.4764 7.8449C19.8377 9.00178 19.0708 10.8055 19.2264 12.5549C19.382 14.323 20.447 16.0012 22.1964 16.8749L22.1889 16.8912C21.8143 17.7071 21.5646 18.2511 21.0114 19.0949C20.552 19.7943 20.0064 20.5593 19.4064 21.1349C18.8064 21.7105 18.1708 22.0743 17.5314 22.0799C16.9145 22.0855 16.5639 21.9018 16.0314 21.6599C15.4989 21.418 14.8108 21.1405 13.7514 21.1499C12.6939 21.1555 11.9964 21.4218 11.4564 21.6599C10.9164 21.898 10.562 22.0855 9.9414 22.0799C9.28515 22.0743 8.67578 21.7555 8.0964 21.2249C7.51703 20.6943 6.9939 19.9705 6.5364 19.2749C4.0164 15.4349 3.8139 10.9237 5.2614 8.6999C6.32265 7.06678 9.0864 6.1349 9.5064 6.1349Z" fill="black" />
                  <path d="M16.9764 1.1399C16.9445 2.10928 16.6127 3.05803 16.0614 3.7649C15.4839 4.5074 14.5127 5.02115 13.5714 5.1749C13.5883 4.24303 13.9558 3.2774 14.5164 2.5949C15.1052 1.8824 16.0802 1.36865 16.9764 1.1399Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_740_8947">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="font-roboto text-xs font-medium text-black">
                Sign in with Apple
              </span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center font-roboto text-sm font-normal">
            <span className="text-black">Have an account? </span>
            <a href="#" className="text-[#0F3DDE] hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center rounded-l-[48px] overflow-hidden w-1/2">
        <Image
          src="/images/login_page.jpg"
          alt="Modern office building with trees"
          className="w-full h-screen object-cover"
          width={100}
          height={100}
          unoptimized
        />
      </div>
    </div>
  );
}
