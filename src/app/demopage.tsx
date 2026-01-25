import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-bg px-6 pb-72 md:px-12">
        {/* Background Chart */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-screen bg-linear-to-b from-neutral-bg/70 via-[#D8DEF3]/70 to-neutral-bg/70">
          <div className="relative mx-auto h-full max-w-6xl opacity-50">
            {/* Grid Lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="260"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 260 0 L 0 0 0 100"
                    fill="none"
                    stroke="rgba(0,0,26,0.15)"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Chart Lines */}
              <path
                d="M 130 620 L 390 620 L 650 495 L 910 308 L 1170 245"
                fill="none"
                stroke="#3CC3DF"
                strokeWidth="2"
                opacity="0.6"
              />
              <path
                d="M 130 620 L 390 510 L 650 510 L 910 510 L 1170 495"
                fill="none"
                stroke="#FF928A"
                strokeWidth="2"
                opacity="0.6"
              />
              <path
                d="M 130 620 L 390 557 L 650 537 L 910 510 L 1170 495"
                fill="none"
                stroke="#8979FF"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="pointer-events-none absolute inset-0">
          <div className="relative mx-auto h-full max-w-6xl">
            {/* Cap table badge */}
            <div className="absolute left-64 top-72 hidden rotate-12 rounded-xl border border-neutral-border bg-white px-4 py-2 shadow-card lg:flex lg:items-center lg:gap-2">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path
                  d="M10.9189 8.43959C10.8611 8.70946 11.0332 8.97543 11.303 9.03327L11.7528 9.12966L10.1594 10.1606C10.141 10.1726 10.1204 10.1808 10.0989 10.1847C10.0773 10.1887 10.0552 10.1884 10.0337 10.1838C10.0123 10.1792 9.99198 10.1704 9.97394 10.158C9.9559 10.1455 9.9405 10.1296 9.92861 10.1112L9.11634 8.85575C8.94824 8.59614 8.68394 8.4139 8.38153 8.34909C8.07912 8.28428 7.76335 8.34219 7.50362 8.51011L5.68855 9.68448C5.63093 9.71895 5.58083 9.76466 5.54126 9.81891C5.50168 9.87315 5.47344 9.93481 5.45821 10.0002C5.44299 10.0656 5.44109 10.1334 5.45263 10.1995C5.46417 10.2657 5.48892 10.3288 5.52539 10.3852C5.56187 10.4416 5.60932 10.49 5.66493 10.5277C5.72054 10.5653 5.78315 10.5914 5.84905 10.6043C5.91494 10.6172 5.98276 10.6167 6.04845 10.6028C6.11415 10.5889 6.17638 10.562 6.23144 10.5235L8.04651 9.34917C8.0649 9.33724 8.08547 9.32906 8.10702 9.32508C8.12858 9.32111 8.15072 9.32143 8.17215 9.32603C8.19359 9.33062 8.21391 9.3394 8.23194 9.35186C8.24998 9.36431 8.26538 9.38021 8.27727 9.39863L9.08955 10.6541C9.25765 10.9137 9.52195 11.0959 9.82436 11.1607C10.1268 11.2255 10.4425 11.1676 10.7023 10.9997L12.2956 9.96938L12.1993 10.4185C12.1715 10.5482 12.1964 10.6836 12.2684 10.7949C12.3404 10.9062 12.4537 10.9844 12.5834 11.0122C12.7131 11.04 12.8485 11.0151 12.9598 10.9431C13.0711 10.8711 13.1493 10.7577 13.1771 10.6281L13.5264 8.99842C13.5541 8.86875 13.5293 8.73336 13.4573 8.62202C13.3852 8.51069 13.2719 8.43253 13.1422 8.40474L11.5126 8.05547C11.3829 8.02768 11.2475 8.05254 11.1362 8.12457C11.0249 8.19661 10.9467 8.30992 10.9189 8.43959Z"
                  fill="#2D60FF"
                />
              </svg>
              <span className="whitespace-nowrap text-center text-base font-medium leading-[120%] tracking-[-0.02em] text-neutral-text">
                Cap table
              </span>
            </div>

            {/* Exit diagram badge */}
            <div className="absolute lleft-168 top-2 hidden -rotate-15 rounded-xl border border-neutral-border bg-white px-4 py-2 shadow-card lg:flex lg:items-center lg:gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10.2692 8.98146L14.5119 1.63299M14.5119 1.63299L11.0706 2.55508M14.5119 1.63299L15.4339 5.07426"
                  stroke="#2D60FF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.07232 3.35839C4.51578 4.31137 2.4053 7.96682 3.35827 11.5234C4.31124 15.0799 7.9667 17.1904 11.5232 16.2374C15.0798 15.2844 17.1903 11.629 16.2373 8.07244"
                  stroke="#2D60FF"
                  strokeLinecap="round"
                />
              </svg>
              <span className="whitespace-nowrap text-center text-base font-medium leading-[120%] tracking-[-0.02em] text-neutral-text">
                Exit diagram
              </span>
            </div>

            {/* Option calculator badge */}
            <div className="absolute left-20 top-14 hidden -rotate-14 rounded-xl border border-neutral-border bg-white px-4 py-2 shadow-card lg:flex lg:items-center lg:gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8.0074 3.07924L8.0813 3.06078C9.39536 2.73259 10.436 2.4732 11.2896 2.34504L11.6444 2.2987C12.4568 2.20799 13.1094 2.25894 13.6858 2.52868L13.9274 2.65758C14.5631 3.03923 14.9725 3.6359 15.3177 4.50462C15.6583 5.36095 15.9453 6.50552 16.3205 8.00765L16.3389 8.08155C16.714 9.58343 16.9988 10.7282 17.101 11.6447C17.2046 12.5727 17.1232 13.2918 16.7421 13.9276C16.3605 14.5633 15.7645 14.9726 14.896 15.3177L14.8951 15.318C14.0389 15.6585 12.8948 15.9454 11.393 16.3205L11.3191 16.3389C9.81693 16.7141 8.67163 16.9991 7.75503 17.1012C6.82692 17.2049 6.10788 17.1236 5.4721 16.7424C4.83653 16.3608 4.42708 15.7647 4.08197 14.8963L4.08173 14.8953L3.95604 14.5613C3.66786 13.7481 3.40749 12.7076 3.07923 11.3933L3.06077 11.3194C2.73249 10.0049 2.47295 8.96383 2.34479 8.11009L2.29845 7.75528C2.20777 6.94314 2.25912 6.29114 2.52866 5.71486L2.65733 5.47235C2.99132 4.91598 3.48971 4.53286 4.19123 4.21455L4.50437 4.08198C5.36069 3.74136 6.5053 3.4544 8.0074 3.07924Z"
                  fill="none"
                  stroke="#2D60FF"
                  strokeWidth="0.7"
                />
              </svg>
              <span className="whitespace-nowrap text-center text-base font-medium leading-[120%] tracking-[-0.02em] text-neutral-text">
                Option calculator
              </span>
            </div>

            {/* Funds Management badge */}
            <div className="absolute left-182.75 top-20 hidden rotate-6 rounded-xl border border-neutral-border bg-white px-4 py-2 shadow-card lg:flex lg:items-center lg:gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M14.8116 8.29925C14.8558 8.30363 14.8977 8.30909 14.9372 8.31563C15.0854 8.3405 15.226 8.39203 15.3534 8.46561C15.3985 7.39352 15.2924 6.55173 14.7469 5.87195C14.3045 5.32212 13.6995 5.03353 12.9342 4.84416L12.9068 4.83781L12.8872 4.82026L10.5901 2.90877C10.1911 2.5819 9.7056 2.37811 9.1928 2.32221C8.68 2.26632 8.16201 2.36074 7.70191 2.59396L5.04764 3.96577L5.02411 3.97863L4.99591 3.97891C4.20777 3.99896 3.55484 4.15043 3.00442 4.59206C2.45458 5.03442 2.166 5.63938 1.97662 6.4047C1.79287 7.14917 1.68777 8.11346 1.555 9.33158L1.54691 9.40581C1.41413 10.6239 1.30896 11.5889 1.32808 12.3548C1.34813 13.1429 1.49961 13.7959 1.94123 14.3463C2.38359 14.8961 2.98855 15.1847 3.75387 15.3741C4.49834 15.5578 5.46263 15.6629 6.68075 15.7957L8.7432 16.0205C9.96132 16.1533 10.9263 16.2585 11.6922 16.2393C12.4803 16.2193 13.1333 16.0678 13.6837 15.6262C14.3629 15.0799 14.6478 14.2807 14.8348 13.2234C14.6935 13.2688 14.547 13.2882 14.3953 13.2815C14.3558 13.279 14.3137 13.275 14.2691 13.2697L13.8178 13.2206C13.6453 14.1017 13.4238 14.5524 13.0572 14.8464C12.7463 15.0962 12.3435 15.2226 11.6671 15.2394C10.9765 15.2567 10.0783 15.1601 8.81445 15.0224L6.82622 14.8056C5.56237 14.6679 4.66517 14.5688 3.99317 14.403C3.33687 14.2409 2.97083 14.0307 2.72104 13.7198C2.47126 13.4089 2.34482 13.0061 2.32802 12.3297C2.31075 11.6391 2.40731 10.7409 2.54506 9.47705C2.68282 8.2132 2.78195 7.31599 2.94774 6.644C3.10981 5.9877 3.32004 5.62166 3.63094 5.37187C3.94184 5.12209 4.34457 4.99565 5.02104 4.97885C5.71231 4.96165 6.60981 5.05813 7.87366 5.19589L9.86188 5.4126C11.1257 5.55036 12.0236 5.64956 12.6949 5.81528C13.3512 5.97735 13.7173 6.18758 13.9671 6.49848C14.2618 6.86457 14.3809 7.35302 14.3596 8.24999L14.8116 8.29925Z"
                  fill="#2D60FF"
                />
              </svg>
              <span className="whitespace-nowrap text-center text-base font-medium leading-[120%] tracking-[-0.02em] text-neutral-text">
                Funds Management
              </span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl pt-16 md:pt-20">
          <div className="mb-12 flex flex-col items-center gap-12 md:mb-24 md:gap-24">
            <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-4xl lg:text-5xl">
              Simulate and manage investment rounds with precision and ease
            </h1>
            <button className="gradient-brand shadow-brand rounded-full border border-brand-blue-border px-8 py-3 text-base font-semibold leading-snug text-neutral-bg transition-transform duration-200 hover:scale-105 active:scale-95 md:text-lg">
              Calculate your series now
            </button>
          </div>

          {/* App Screenshot */}
          <div className="flex justify-center ">
            <div className="w-full max-w-5xl overflow-hidden rounded-3xl border-2 border-[#D1E2F5] shadow-lg">
              <Image
                src="/images/hero_image.svg"
                height={100}
                width={100}
                alt="TermSheetGenie Application Interface"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="bg-neutral-bg px-6 py-12 md:py-20 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-8 md:gap-12 lg:flex-row">
            {/* Left Content */}
            <div className="flex flex-1 flex-col gap-12 md:gap-16">
              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.928 6.928C4 9.86 4 14.572 4 24C4 33.428 4 38.142 6.928 41.07C9.86 44 14.572 44 24 44C33.428 44 38.142 44 41.07 41.07C44 38.144 44 33.428 44 24C44 14.572 44 9.858 41.07 6.928C38.144 4 33.428 4 24 4C14.572 4 9.858 4 6.928 6.928ZM27.5 20C27.5 20.828 28.172 21.5 29 21.5H30.38L26.354 25.526C26.3076 25.5726 26.2524 25.6095 26.1916 25.6347C26.1309 25.6599 26.0658 25.6729 26 25.6729C25.9342 25.6729 25.8691 25.6599 25.8084 25.6347C25.7476 25.6095 25.6924 25.5726 25.646 25.526L22.474 22.354C21.8177 21.6982 20.9278 21.3297 20 21.3297C19.0722 21.3297 18.1823 21.6982 17.526 22.354L12.94 26.94C12.7926 27.0773 12.6744 27.2429 12.5924 27.4269C12.5105 27.6109 12.4664 27.8095 12.4628 28.011C12.4593 28.2124 12.4963 28.4124 12.5718 28.5992C12.6472 28.786 12.7595 28.9556 12.9019 29.0981C13.0444 29.2405 13.214 29.3528 13.4008 29.4282C13.5876 29.5037 13.7876 29.5407 13.989 29.5372C14.1905 29.5336 14.3891 29.4895 14.5731 29.4076C14.7571 29.3256 14.9227 29.2074 15.06 29.06L19.646 24.474C19.6924 24.4274 19.7476 24.3905 19.8084 24.3653C19.8691 24.3401 19.9342 24.3271 20 24.3271C20.0658 24.3271 20.1309 24.3401 20.1916 24.3653C20.2524 24.3905 20.3076 24.4274 20.354 24.474L23.526 27.646C24.1823 28.3018 25.0722 28.6703 26 28.6703C26.9278 28.6703 27.8177 28.3018 28.474 27.646L32.5 23.622V25C32.5 25.3978 32.658 25.7794 32.9393 26.0607C33.2206 26.342 33.6022 26.5 34 26.5C34.3978 26.5 34.7794 26.342 35.0607 26.0607C35.342 25.7794 35.5 25.3978 35.5 25V20C35.5 19.6022 35.342 19.2206 35.0607 18.9393C34.7794 18.658 34.3978 18.5 34 18.5H29C28.6022 18.5 28.2206 18.658 27.9393 18.9393C27.658 19.2206 27.5 19.6022 27.5 20Z"
                    fill="#2D60FF"
                  />
                </svg>
                <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-4xl lg:text-5xl">
                  Understand the real impact of investment structures accounting
                  for all the details in a Term Sheet
                </h2>
              </div>
              <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg lg:text-xl">
                TermSheetGenie offers advanced tools to simulate and evaluate
                term sheets.
              </p>
            </div>

            {/* Right Chart Placeholder */}
            <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl bg-white md:h-96 lg:h-120 lg:w-auto">
              <div className="text-neutral-text/50">Chart visualization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="bg-neutral-bg px-6 py-12 md:py-20 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tight text-neutral-text md:mb-12 md:text-4xl lg:text-5xl">
            Key Features
          </h2>

          {/* Bento Grid */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              {/* Advanced Simulations */}
              <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8 lg:min-h-120">
                <div className="flex flex-col gap-2 pb-6 md:pb-8">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                    Advanced Simulations
                  </h3>
                  <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                    Understand dilution and effective ownership under different
                    exit scenarios
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-linear-to-br from-white/50 to-transparent p-4 md:p-8">
                  <div className="text-neutral-text/50">
                    Bar chart visualization
                  </div>
                </div>
              </div>

              {/* Clear Projections */}
              <div className="flex flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                    Clear Projections
                  </h3>
                  <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                    Estimate the value of the legal terms you are agreeing to,
                    beyond an oversimplified percentage of a post-money
                    valuation
                  </p>
                </div>
                <div className="mt-6 flex flex-1 items-center justify-center p-4 md:mt-8 md:p-8">
                  <div className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-8 shadow-md md:gap-8 md:px-8 md:py-10">
                    <div className="text-center text-xl font-normal leading-[100%] text-black opacity-50">
                      Breakeven Valution
                    </div>
                    <div className="text-[63px] font-bold leading-[100%] text-brand-blue">
                      $50.05M
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              {/* Abstraction */}
              <div className="flex flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                    Abstraction
                  </h3>
                  <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                    Understand your investments from detailed term sheet to a
                    fund of funds level
                  </p>
                </div>
                <div className="mt-8 flex flex-1 flex-col gap-3 px-12 pb-8 md:mt-12 md:pb-12">
                  {["Common", "RP+C", "CP", "PCP", "PCPC"].map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 rounded-2xl border border-brand-blue/20 bg-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-center text-lg font-medium leading-snug tracking-tight text-neutral-text md:text-xl">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Efficient Management */}
              <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8 lg:min-h-120">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                    Efficient Management
                  </h3>
                  <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                    Manage your investments and gain insights into the value of
                    your entire portfolio.
                  </p>
                </div>
                <div className="mt-8 flex flex-1 items-center justify-end overflow-hidden md:mt-12">
                  <Image
                    height={100}
                    width={100}
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ad4a14b5ba26565de10fd4a953d2d958e7fca5be?width=2317"
                    alt="Portfolio management interface"
                    className="h-auto w-full max-w-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for VC Ecosystem Section */}
      <section className="bg-neutral-bg px-6 py-12 md:py-20 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-neutral-border bg-white">
            <div className="flex flex-col items-center gap-8 px-6 py-12 md:gap-12 md:flex-row md:items-start md:px-16 lg:py-20">
              {/* Illustration */}
              <div className="w-full max-w-xs md:max-w-sm">
                <Image
                  height={100}
                  width={100}
                  src="/images/hero_image.svg"
                  alt="Handshake illustration"
                  className="h-auto w-full"
                />
              </div>

              {/* Content */}
              <div className="flex max-w-md flex-col gap-6 md:gap-10 lg:max-w-2xl">
                <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-4xl lg:text-5xl">
                  Built for the Venture Capital Ecosystem
                </h2>
                <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/80 md:text-lg">
                  Whether you are a VC fund, a brand new entrepreneur or a
                  Series C start-up, Term Sheet Genie can help you negotiate
                  smarter deals, simulate exit scenarios, and manage multiple
                  investment rounds, all in one place.
                </p>
                <button className="gradient-brand shadow-brand self-start rounded-full border border-brand-blue-border px-8 py-3 text-base font-semibold leading-snug text-neutral-bg transition-transform duration-200 hover:scale-105 active:scale-95 md:text-lg">
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-neutral-bg px-6 py-12 md:py-20 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-neutral-border bg-white shadow-lg">
            <div className="flex flex-col items-center gap-8 px-6 py-8 md:gap-12 md:px-12 md:py-12">
              {/* Header */}
              <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
                <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-center text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-xl">
                  Please fill out the form below and we will get back to you as
                  soon as possible.
                </p>
              </div>

              {/* Form */}
              <form className="flex w-full max-w-2xl flex-col gap-3 md:gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="flex-1 rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="flex-1 rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow resize-none"
                />
                <button
                  type="submit"
                  className="gradient-brand shadow-brand self-start rounded-full border border-brand-blue-border px-8 py-3 text-sm font-semibold leading-snug text-white transition-transform duration-200 hover:scale-105 active:scale-95 md:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
