import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <HomeSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
