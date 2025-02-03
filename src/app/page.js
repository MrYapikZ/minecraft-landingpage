import Image from "next/image";

import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
        <Hero />
        <Feature />
        <Team />
        <Footer />
    </div>
  );
}
