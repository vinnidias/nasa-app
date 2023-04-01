import Link from "next/link"
import styles from "./styles.module.css"
export const NavBar = ()=> {

  return(
    <nav className={styles.navBar}>
      <p>NASA APP</p>
      <li>
        <ul><Link href="/">Home</Link></ul>
        <ul><Link href="/apod">Apod</Link></ul>
        <ul><Link href="/news">News</Link></ul>
      </li>
    </nav>
  )
}