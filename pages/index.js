import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
   
      </Head>
      <Header />
      <About />
      <Contact />
    </div>
  );
}
