import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./_components/Hero";
import Ecosystem from "./_components/Ecosystem";
import KeyFeature from "./_components/KeyFeature";
import GetInTouch from "./_components/GetInTouch";
import Marketing from "./_components/Marketing";


export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-white flex flex-col justify-center gap-20">
      <Hero />
      <KeyFeature />
      <Marketing />
    </div>
  );
}
