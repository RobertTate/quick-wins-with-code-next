import React from "react";
import styles from "./siteFooter.module.scss";
import Link from 'next/link';


export default function SiteFooter() {
  return (
    <footer className={styles["SiteFooter"]}>
      <div className={`${styles["SiteFooter-content"]} o-content`}>
        <div>
          <Link href={`/about`}>Robert Tate</Link> made this site with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">next.js</a>.
        </div>
        <div>
          <a href="https://open.spotify.com/user/bobbytate?si=o7vzMUBATySLoqtvACLexw" target="_blank" rel="noreferrer">He's listening to...</a>
        </div>
      </div>
    </footer>
  )
}
