import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}
