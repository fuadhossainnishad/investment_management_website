import Header from "@/components/Header";
import Hero from './(home)/_components/Hero';
import Ecosystem from "./(home)/_components/Ecosystem";
import KeyFeature from "./(home)/_components/KeyFeature";
import Image from "next/image";
import GetInTouch from "./(home)/_components/GetInTouch";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-white flex flex-col justify-center">

      <Header />
      <Hero />
      <section className="px-[10%] pt-[10%]">
        <div className="w-full ">
          <Image
            src='/images/feature2.svg'
            alt="feature2"
            height={100}
            width={100}
            className="w-full h-auto"
          />
        </div>
        <Ecosystem />
        <KeyFeature />
        <GetInTouch />
      </section>

    </div>
  );
}
