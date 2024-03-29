import Image from "next/image";
import HomeSection from "./components/home/HomeSection";
import NavBar from "./components/nav/NavBar";
import AboutSection from "./components/about/AboutSection"
import ProjectSection from "./components/project/ProjectSection";
import EmailSection from "./components/email/EmailSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <NavBar/>
      <div className="container mt-28 mx-auto px-12 sm:px-4 py-4">
        <HomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
