import type { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

import styles from "./button.module.scss";
import getModifiers from "../partials/getModifiers";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  modifier?: string;
  utilities?: string;
  style?: CSSProperties;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const getAttributes = () => {
    let attributes: AnchorHTMLAttributes<HTMLAnchorElement> = {
      className: `${styles["Button"]} ${getModifiers(styles, props.modifier)} ${props.utilities ? props.utilities : ''}`,
      style: props.style,
      href: props.href,
    }
    
    if (props.target) {
      attributes["target"] = props.target
      attributes["rel"] = "noreferrer"
    }
    return attributes;
  }


  return (
    <a {...getAttributes()}>
      {props.children}
    </a>
  )
}
