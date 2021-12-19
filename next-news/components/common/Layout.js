import styles from "../../styles/Layout.module.css";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
