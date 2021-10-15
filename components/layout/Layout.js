import NavBar from '../layout/Layout'

export default function Layout({ children }) {
    return (
      <div>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    );
  }