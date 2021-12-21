import styles from "../../styles/Nav.module.css";
import Link from "next/link";
function Nav() {
  return (
    <div className={styles.container}>
      <span className={styles.nav_logo}>SY</span>
      <div className={styles.nav_main}>
        <Link href="/">
          <a className={styles.news}>Hacker News</a>
        </Link>
        <div className={styles.small_nav}>
          <Link href="/newest">
            <a>new</a>
          </Link>
          <Link href="/ask">
            <a>ask</a>
          </Link>
          <Link href="/show">
            <a>show</a>
          </Link>
          <Link href="/jobs">
            <a>jobs</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;
