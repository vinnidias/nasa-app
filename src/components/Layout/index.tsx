import { ILayoutProps } from "@/interfaces/ILayoutProps";
import { NavBar } from "../Navbar";
import styles from "./styles.module.css"

export const Layout = ({children}: ILayoutProps)=> {
  return(
    <>
      <NavBar/>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}