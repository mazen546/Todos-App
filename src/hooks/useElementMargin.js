import { useEffect, useState } from "react";

export function useElementMargin(ref) {
  const [margins, setMargins] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const element = ref.current?.firstChild;
    if (!element) {
      return;
    }
    const { marginTop, marginRight, marginBottom, marginLeft } =
      window.getComputedStyle(element);
    setMargins([
      parseInt(marginTop),
      parseInt(marginRight),
      parseInt(marginBottom),
      parseInt(marginLeft),
    ]);
  }, [ref]);
  return margins;
}
