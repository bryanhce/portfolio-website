import About from "../components/Index/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Index/Hero";
import Projects from "../components/Index/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className="bg-gray-700 text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
    >
      <Header isHeaderSticky={true} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe isFormal={true} />
      </section>

      <Footer isVisibleOnMobile={false} />
    </div>
  );
}
