import CTA from "@/components/cta";
import { Features } from "@/components/feature";
import Footer from "@/components/footer";
import GetInfo from "@/components/getinfo";
import { Header } from "@/components/header";
import Hero from "@/components/hero";

export default function Home(){
    return <>
        <Header/>
        <main className="min-h-screen bg-black">
            <Hero />
            <Features/>
            <GetInfo/>
            <CTA/>
            <Footer/>
      </main>
    </>
}