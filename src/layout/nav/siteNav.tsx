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
          Q W W C
        </div>
        <div className={`${styles['SiteNav-links']}`}>
          <Link href={`/`}>HOME</Link>
          <Link href={`/about`}>ABOUT</Link>
          <Link href={`/contact`}>CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}
