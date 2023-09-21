import type { CSSProperties, PropsWithChildren, JSX } from 'react';

import styles from "./text.module.scss";
import getModifiers from "../partials/getModifiers";

type TextProps = {
  modifier?: string;
  utilities?: string;
  styles?: CSSProperties;
  semantic?: keyof JSX.IntrinsicElements;
}

export default function Text(props: PropsWithChildren<TextProps>) {
  const SemanticTag = props.semantic ? props.semantic : "p";

  return (
    <SemanticTag className={`${styles["Text"]} ${getModifiers(styles, props.modifier)} ${props.utilities ? props.utilities : ''}`}
      style={props.styles}
    >
      {props.children}
    </SemanticTag>
  )
}
