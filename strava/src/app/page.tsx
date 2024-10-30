import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import OurProjects from "./components/ourservices";
import Footer from "./components/footer";
import NewsletterSubscription from "./components/newsletter";
export default function Home() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">

      <Hero></Hero>
      <OurProjects></OurProjects>
      <NewsletterSubscription></NewsletterSubscription>
      </div>
    </>
  );
}
