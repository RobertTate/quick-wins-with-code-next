import type { CSSProperties, PropsWithChildren } from 'react';

import styles from "./block.module.scss";
import getModifiers from "../partials/getModifiers";

type BlockProps = {
  modifier?: string;
  utilities?: string;
  styles?: CSSProperties;
}

export default function Block(props: PropsWithChildren<BlockProps>) {
  return (
    <div className={`${styles["Block"]} ${getModifiers(styles, props.modifier)} ${props.utilities ? props.utilities : ''}`}
      style={props.styles}
    >
      {props.children}
    </div>
  )
}
