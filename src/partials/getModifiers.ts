
export default function getModifiers(componentStyles?: any, modifierProps?: string) {
  if (modifierProps) {
    return modifierProps.split(" ").reduce((modList: string[], item: string) => {
      modList.push(componentStyles[item]);
      return modList;
    }, []).join(" ");
  } else {
    return "";
  }
}
