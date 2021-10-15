import NavBar from '../navBar/NavBar'

export default function Layout({ children }) {
    return (
      <div>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </div>
    );
  }