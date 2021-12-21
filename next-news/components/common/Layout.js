import styles from "../../styles/Layout.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Main from "./Main";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
