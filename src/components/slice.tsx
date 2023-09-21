import type { CSSProperties, PropsWithChildren } from 'react';

import styles from "./slice.module.scss";
import getModifiers from "../partials/getModifiers";

type SliceProps = {
  modifier?: string;
  utilities?: string;
  styles?: CSSProperties;
}

export default function Slice(props: PropsWithChildren<SliceProps>) {
  return (
    <div
      className={`${styles["Slice"]} ${getModifiers(styles, props.modifier)} ${props.utilities ? props.utilities : ''}`}
      style={props.styles}
    >
      <div className={`${styles["Slice-content"]} o-content`}>
        {props.children}
      </div>
    </div>
  )
}
