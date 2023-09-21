import type { CSSProperties, PropsWithChildren } from 'react';

import styles from "./container.module.scss";
import getModifiers from "../partials/getModifiers";

type ContainerProps = {
  modifier?: string;
  utilities?: string;
  styles?: CSSProperties;
}

export default function Container(props: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`${styles["Container"]} ${getModifiers(styles, props.modifier)} ${props.utilities ? props.utilities : ''}`}
      style={props.styles}
    >
      {props.children}
    </div>
  )
}
