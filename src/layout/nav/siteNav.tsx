'use client'

import React, { useEffect, useState } from 'react';
import styles from './siteNav.module.scss';
import Link from 'next/link';

export default function SiteNav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const addVisibilityClass = () => {
    if (visible) {
      return styles["SiteNav--visible"];
    } else {
      return styles["SiteNav--hidden"];
    };
  };

  const scrollDiff = (current: number, last: number) => {
    return current - last;
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < 55) {
        setScrollPosition(currentScrollPosition);
        setVisible(true);
      } else if (currentScrollPosition > scrollPosition && scrollDiff(currentScrollPosition, scrollPosition) > 50) {
        setScrollPosition(currentScrollPosition);
        setVisible(false);
      } else if (currentScrollPosition < scrollPosition && scrollDiff(scrollPosition, currentScrollPosition) > 50) {
        setScrollPosition(currentScrollPosition);
        setVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollPosition, visible])

  return (
    <nav className={`${styles['SiteNav']} ${addVisibilityClass()}`}>
      <div className={`${styles['SiteNav-content']} o-content`}>
        <div className={`${styles['SiteNav-icon']}`}>
          <Link href={`/`}>
            <div className={`${styles['SiteNav-logo']}`}>
              <svg className={`${styles['SiteNav-logo--desk']}`} width="100.37" height="32.89" viewBox="0 0 100.37 32.89" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dy=".40em" textAnchor="middle">
                  Q W W C
                </text>
              </svg>
              <svg className={`${styles['SiteNav-logo--palm']}`} width="70.37" height="26.29" viewBox="0 0 70.37 26.29" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                  Q W W C
                </text>
              </svg>
            </div>
          </Link>
        </div>
        <div className={`${styles['SiteNav-links']}`}>
          <Link href={`/about`}>ABOUT</Link>
          <Link href={`/projects`}>PROJECTS</Link>
          <Link href={`/contact`}>CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}
