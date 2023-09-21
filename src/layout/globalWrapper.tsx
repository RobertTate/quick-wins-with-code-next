import type { PropsWithChildren } from 'react'
import SiteNav from "./nav/siteNav";
import SiteFooter from "./footer/siteFooter";
import styles from "./globalWrapper.module.scss";

export default function GlobalWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <SiteNav />
      <main className={styles["Main"]}>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
