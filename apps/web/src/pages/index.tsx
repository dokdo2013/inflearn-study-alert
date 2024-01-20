import Image from "next/image";
import { Inter } from "next/font/google";
import { HeroBg, HeroContent } from "@/components/Hero";
import SectionFeature from "@/components/SectionFeature";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Inflearn Study Alert</title>
      </Head>
      <div className="w-full flex align-center justify-center flex-col">
        <div className="mt-16">
          <HeroContent />
        </div>

        <SectionFeature />
      </div>
    </main>
  );
}
